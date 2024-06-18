import { computed, defineComponent } from 'vue'
import { Component } from '../../model/enum/component'
import type { SHButtonProps } from './type'
import { useVariants } from '../../hooks/useVariants'
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps
} from '../../helpers/getVariantProps'
import { Size } from '../../model/enum/size'
import { classMerge } from '../../utils/classUtil'

export default defineComponent({
  name: Component.SHButton,
  props: {
    ...getVariantPropsWithClassesList<SHButtonProps>(),
    size: {
      type: String as () => 'large' | 'normal' | 'small',
      default: Size.NORMAL,
      validator: (value: Size) => Object.values(Size).includes(value)
    },
    iconAfter: { type: Boolean },
    disabled: { type: Boolean },
    outlined: { type: Boolean },
    round: { type: Boolean },
    pulse: { type: Boolean },
    loading: { type: Boolean },
    nuxt: { type: Boolean },
    routerLink: { type: Boolean },
    type: {
      type: String as () =>
        | 'primary'
        | 'primary-text'
        | 'danger'
        | 'danger-text'
        | 'success'
        | 'success-text'
        | 'warning'
        | 'warning-text'
        | 'info'
        | 'info-text'
        | 'text'
        | 'default',
      default: 'default'
    }
  },

  setup(props, { slots }) {
    const variant = computed(() => {
      const customProps: VariantJSWithClassesListProps<SHButtonProps> = {
        ...props,
        variant: props.disabled || props.loading ? ([props.type, 'disabled'] as any) : props.type
      }
      return useVariants<SHButtonProps>(Component.SHButton, customProps)
    })

    const componentClasses = computed(() => {
      const currentClass = [
        variant.value.root,
        {
          [variant.value.outlined as string]: props.outlined,
          [variant.value.round as string]: props.round,
          [variant.value.empty as string]: !slots.default,
          [variant.value.disabled as string]: props.disabled
        }
      ]
      return classMerge(currentClass)
    })
    return () => (
      <button class={componentClasses.value}>{slots.default ? slots.default() : ''}</button>
    )
  }
})

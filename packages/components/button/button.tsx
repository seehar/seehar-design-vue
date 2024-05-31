import { computed, defineComponent } from 'vue'
import { Component } from '../../model/enum/component'
import type { SHButtonProps } from './type'
import { useVariants } from '../../hooks/useVariants'
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps
} from '../../helpers/getVariantProps'
import { Size } from '../../model/enum/size'

export default defineComponent({
  name: Component.SHButton,
  props: {
    ...getVariantPropsWithClassesList<SHButtonProps>(),
    size: {
      type: String,
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
    routerLink: { type: Boolean }
  },

  setup(props, { slots }) {
    const variant = computed(() => {
      const customProps: VariantJSWithClassesListProps<SHButtonProps> = {
        ...props,
        variant: props.disabled || props.loading ? 'disabled' : props.variant
      }
      return useVariants<SHButtonProps>(Component.SHButton, customProps)
    })
    return () => (
      <button
        class={[
          variant.value.root,
          {
            [variant.value.outlined as string]: props.outlined,
            [variant.value.round as string]: props.round,
            [variant.value.empty as string]: !slots.default
          }
        ]}
      >
        {slots.default ? slots.default() : ''}
      </button>
    )
  }
})

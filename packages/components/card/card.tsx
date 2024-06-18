import { computed, defineComponent } from 'vue'
import { SHCardProps } from './type'
import { useVariants } from '../../hooks/useVariants'
import { Component } from '../../model/enum/component'
import { getVariantPropsWithClassesList } from '../../helpers/getVariantProps'
import { classMerge } from '../../utils/classUtil'

export default defineComponent({
  name: Component.SHCard,
  props: {
    ...getVariantPropsWithClassesList<SHCardProps>(),
    title: {
      type: String,
      default: null
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const variant = computed(() => {
      return useVariants<SHCardProps>(Component.SHCard, props)
    })

    const componentClasses = computed(() => {
      const currentClass = [
        variant.value.root,
        {
          [variant.value.shadow as string]: props.shadow
        }
      ]
      return classMerge(currentClass)
    })
    return () => (
      <div class={componentClasses.value}>
        {props.title ? (
          <div class="dark:text-white/80 font-bold text-black/80">{props.title}</div>
        ) : (
          ''
        )}
        {slots.default ? slots.default() : ''}
      </div>
    )
  }
})

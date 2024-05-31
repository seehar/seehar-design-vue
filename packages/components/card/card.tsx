import { computed, defineComponent } from 'vue'
import { SHCardProps } from './type'
import { useVariants } from '../../hooks/useVariants'
import { Component } from '../../model/enum/component'

export default defineComponent({
  name: Component.SHCard,
  setup(props: SHCardProps, { slots }) {
    const variant = computed(() => {
      return useVariants<SHCardProps>(Component.SHCard, props)
    })
    return () => <div class={variant.value.root}>{slots.default ? slots.default() : ''}</div>
  }
})

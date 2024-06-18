import { computed, defineComponent } from 'vue'
import { SHCardProps } from './type'
import { useVariants } from '../../hooks/useVariants'
import { Component } from '../../model/enum/component'
import { getVariantPropsWithClassesList } from '../../helpers/getVariantProps'
import { CSSClasses, CSSClassKeyValuePair } from '../../types/variant'
import { twMerge } from 'tailwind-merge'

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
      let result = ''
      currentClass.forEach((classItem) => {
        if (typeof classItem === 'string') {
          result += ' ' + classItem
        } else {
          for (const classItemKey in classItem) {
            if (classItem?.[classItemKey as keyof (CSSClassKeyValuePair | CSSClasses)]) {
              result += ' ' + classItemKey
            }
          }
        }
      })
      return twMerge(result)
    })
    return () => (
      <div class={componentClasses.value}>
        <div v-if={props.title} class="dark:text-white/80 font-bold text-black/80">
          {props.title}
        </div>{' '}
        {slots.default ? slots.default() : ''}
      </div>
    )
  }
})

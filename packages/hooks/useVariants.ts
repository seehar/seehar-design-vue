import {
  CSSClass,
  CSSClasses,
  CSSClassKeyValuePair,
  CSSRawClassesList,
  SeeharUIConfiguration
} from '../types/variant'
import { Component } from '../model/enum/component'
import { twMerge } from 'tailwind-merge'
import { IComponentWithRoot } from '../types/component/component'
import { inject } from 'vue'
import {
  VariantJSWithClassesListProps,
  VariantJSWithClassesUseVariants
} from '../helpers/getVariantProps'

export const selectClasses = (classesObject: CSSClassKeyValuePair): CSSClasses =>
  Object.keys(classesObject).filter((className: string) => !!classesObject[className])

const mergeClasses = (...classes: CSSClasses): string =>
  classes
    .map((className: CSSClass): string => {
      if (typeof className === 'string' || className === undefined) {
        return className || ''
      }

      if (Array.isArray(className)) {
        return mergeClasses(...className)
      }

      return mergeClasses(...selectClasses(className))
    })
    .join(' ')
    .replace(/  +/g, ' ')
    .trim()

export const useVariants = <T extends IComponentWithRoot>(
  name: Component,
  props: VariantJSWithClassesListProps<T> = {}
): {
  transitions?: Record<string, Record<string, string>>
} & CSSRawClassesList<T> => {
  const currentProps = props as VariantJSWithClassesUseVariants<T>
  const config = inject<SeeharUIConfiguration>('config', {} as SeeharUIConfiguration)
  const globalVariant = config && config[name] // FIXME: Not gonna work with nuxt?

  const finalResult: {
    transitions?: Record<string, Record<string, string>>
  } & Record<string, CSSClass> = {}

  if (globalVariant) {
    for (const [key, value] of Object.entries(globalVariant.base || {})) {
      const result = currentProps.base?.[key] ? [currentProps.base[key]] : [value]

      const variant = currentProps.variant || 'default'
      result.push(
        Array.isArray(variant)
          ? variant.map((el) => {
              if (el === undefined) {
                return []
              }
              return currentProps.variants?.[el]?.[key] || globalVariant?.variants?.[el]?.[key]
            })
          : currentProps.variants?.[variant]?.[key] || globalVariant?.variants?.[variant]?.[key]
      )

      finalResult[key] = result.filter((el) => !!el)
    }
  }

  for (const [key, value] of Object.entries(finalResult)) {
    finalResult[key] = twMerge(mergeClasses(value))
  }

  finalResult.transitions = config?.transitions || {}
  return finalResult
}

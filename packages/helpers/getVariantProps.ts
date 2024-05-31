import { CSSClassesList, CSSRawClassesList, WithVariantProps } from '../types/variant'
import { PropType } from 'vue'

export type VariantJSWithClassesProps<ClassesKeys> = {
  classes?: PropType<CSSRawClassesList<ClassesKeys>>
  base?: PropType<CSSRawClassesList<ClassesKeys>>
  variants?: PropType<CSSRawClassesList<ClassesKeys>>
  variant?: PropType<string | string[] | undefined>
}

export type VariantJSWithClassesListProps<ClassesKeys> = {
  classes?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  base?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  variants?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  variant?: {
    type: PropType<string | string[] | undefined>
    // type: string | undefined | (string | undefined)[]
    default?: string
  }
}

declare type ObjectWithClassesList = {
  classesList?: CSSClassesList
}

export declare const parseVariantWithClassesList: <P extends ObjectWithClassesList>() => P

export const getVariantPropsWithClassesList = <
  ClassesKeys extends Record<string, unknown>
>(): VariantJSWithClassesListProps<ClassesKeys> => ({
  classes: {
    type: Object as PropType<CSSRawClassesList<ClassesKeys>>,
    default: undefined
  },
  base: {
    type: Object as PropType<CSSRawClassesList<ClassesKeys>>,
    default: undefined
  },
  variants: {
    type: Object as PropType<WithVariantProps<ClassesKeys>>,
    default: undefined
  },
  variant: {
    type: [String, Array] as PropType<string | string[] | undefined>,
    default: undefined
  }
})

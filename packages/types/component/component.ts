import { WithVariantProps } from '../variant'

export interface IComponentWithRoot {
  root?: string
  classes?: string | undefined
  base?: undefined | Record<string, string | string[]>[]
  variants?: undefined | Record<string, string | string[]>[]
  variant?: string
}
export interface SHButtonOptions extends IComponentWithRoot {
  outlined?: string
  big?: string
  normal?: string
  small?: string
  round?: string
  empty?: string
  loading?: string
  disabled?: boolean
}

export type IComponentWithRootType<T extends IComponentWithRoot> = {
  [P in keyof T]: P extends 'variant' ? string | undefined | (string | undefined)[] : T[P]
}

export type SHButtonVariant = WithVariantProps<SHButtonOptions>

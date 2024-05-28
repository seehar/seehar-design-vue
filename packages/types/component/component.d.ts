import { CSSClass } from '../variant'

export interface IComponentWithRoot {
  root?: string
  classes?: string | undefined
  // base?: undefined | Record<string, string | string[]>[]
  base?: CSSClass
  // variants?: undefined | Record<string, string | string[]>[]
  variants?: CSSClass
  variant?: string
}

export type IComponentWithRootType<T extends IComponentWithRoot> = {
  [P in keyof T]: P extends 'variant' ? string | undefined | (string | undefined)[] : T[P]
}

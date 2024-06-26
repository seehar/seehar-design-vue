import { CSSClass } from '../variant'

export interface IComponentWithRoot extends Record<string, unknown> {
  root?: string
  // classes?: string | undefined
  // base?: CSSClass
  variants?: Record<string, Record<string, string[]>>
  // variant?: string
}

export type IComponentWithRootType<T extends IComponentWithRoot> = {
  [P in keyof T]: P extends 'variant' ? string | undefined | (string | undefined)[] : T[P]
}

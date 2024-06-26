import { Component } from '../model/enum/component'
import { SHButtonVariant } from '../components/button/type'
import { SHCardProps } from '../components/card/type'

export declare type CSSClassKeyValuePair = Record<string, any>
export declare type CSSClasses = CSSClass[]
export declare type CSSClass = CSSClassKeyValuePair | string | CSSClasses | undefined

export declare type CSSClassesList<ClassesKeys extends string = string> = {
  [key in ClassesKeys]?: CSSClass
}

export declare type CSSRawClassesList<ClassesKeys> = {
  [T in keyof ClassesKeys]?: CSSClass
}

export type WithVariantProps<P> = {
  base?: CSSRawClassesList<P>
  variants?: Variants<P>
} & P

export interface Variants<P> {
  [key: string]: CSSRawClassesList<P> | undefined
}

export interface SeeharUIConfiguration {
  transitions: Record<string, Record<string, string>>
  [Component.SHButton]?: SHButtonVariant
  [Component.SHCard]?: SHCardProps
}

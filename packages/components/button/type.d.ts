import { IComponentWithRoot } from '../../types/component/component'
import { WithVariantProps } from '../../types/variant'

export interface SHButtonProps extends IComponentWithRoot {
  outlined?: string
  big?: string
  normal?: string
  small?: string
  round?: string
  empty?: string
  loading?: string
  disabled?: boolean
}

export type SHButtonVariant = WithVariantProps<SHButtonProps>

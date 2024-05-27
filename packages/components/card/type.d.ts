import { IComponentWithRoot } from '../../types/component/component'
import { WithVariantProps } from '../../types/variant'

export interface SHCardProps extends IComponentWithRoot {
  /**
   * 卡片标题
   */
  title?: string
}

export type SHCardVariant = WithVariantProps<SHCardProps>

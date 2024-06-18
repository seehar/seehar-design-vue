import { CSSClass, CSSClasses, CSSClassKeyValuePair } from '../types/variant'
import { twMerge } from 'tailwind-merge'

export function classMerge(cssClass: CSSClass[]): string {
  let result = ''
  cssClass.forEach((classItem) => {
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
}

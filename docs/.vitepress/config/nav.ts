/**
 * @Author: seehar
 * @Date: 2022/7/8 23:17
 * @Description: nav配置
 */
import { lang } from '../utils/lang'
import navLocale from '../i18n/pages/nav.json'
import { REPO_PATH } from './global'

function getNav() {
  return Object.values(navLocale[lang])
}

const dropDown = [
  {
    text: '更多',
    items: [
      { text: 'GitHub', link: `https://github.com/${REPO_PATH}`, icon: 'github' },
      { text: 'Blog', link: 'https://seehar.com' }
    ]
  }
]

export const nav = [...getNav(), ...dropDown]

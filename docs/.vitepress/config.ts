/**
 * @Author: seehar
 * @Date: 2022/7/2 15:00
 * @Description: config
 */
import type { UserConfig } from 'vitepress'
import { head } from './config/head'
import { sidebar } from './config/slidebar'
import { nav } from './config/nav'
import { mdPlugin } from './config/plugins'
import { REPO_PATH, REPO_BRANCH } from './config/global'
import * as process from 'process'

const env = process.env.NODE_ENV

export const config: UserConfig = {
  head,
  lang: '',
  base: env === 'production' ? '/seehar-design-vue' : '',
  title: 'Seehar Design Vue',
  description: 'A Vue 3 UI Framework',
  lastUpdated: true,
  themeConfig: {
    editLink: {
      // 编辑此页
      pattern: `https://github.com/${REPO_PATH}/edit/${REPO_BRANCH}/docs/:path`
    },
    siteTitle: 'Seehar Design Vue',
    lastUpdated: '最后更新时间',
    logo: '/images/logo.png',
    logoSmall: '/images/logo.png',
    sidebar, // 没有s
    nav,
    socialLinks: [{ icon: 'github', link: 'https://github.com/seehar' }],
    // search: {
    //     provider: 'local'
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `<a target="_blank" href="https://github.com/seehar" class="text-primary">Copyright &copy; 2023 - ${new Date().getFullYear()} &nbsp;seehar</a>`
    }
  },
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
    config: (md) => mdPlugin(md)
  }
}
export default config

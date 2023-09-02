---
layout: home
editLink: false

title: Seehar Design Vue
titleTemplate: A Vue 3 UI Framework

hero:
  name: Seehar Design Vue
  tagline: 一个简单好看的 vue3 组件库
  actions:
    - theme: brand
      text: 快速上手
      link: /guide/installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/seehar/seehar-design-vue
  image:
    src: images/source_tm.png
    alt: Seehar Design Vue

features:
  - title: 📦 Vite
    details: Vite 打包
  - title: ⚡️ Vue3
    details: Vue3 + TypeScript 组件
  - title: 📃 Vitepress
    details: Vitepress 搭建文档库
  - title: <img src="https://tailwindcss.com/favicons/favicon.ico?v=3" class="w-4 inline-block mr-1" /> Tailwind
    details: 基于 Tailwind 开发样式
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ffa400 30%, #ff2d51);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #ffce76 50%, #ff8ea1 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>

# Seehar Design Vue

A Vue.js 3 UI library

[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)
[![Wei Design](https://img.shields.io/npm/v/seehar-design-vue.svg?style=flat-square)](https://www.npmjs.org/package/seehar-design-vue)

---

- 🔭 [Vite](https://vitejs.dev)
- 💪 [Vue3](https://vuejs.org)
- 🔥 TypeScript

[快速开始](https://seehar.github.io/seehar-design-vue/)

## 安装

### npm

```bash
# npm
npm install seehar-design-vue --save

# pnpm
pnpm add seehar-design-vue

# yarn
yarn add seehar-design-vue
```

### cdn

#### unpkg

[资源浏览](https://unpkg.com/seehar-design-vue/)

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/seehar-design-vue/lib/style.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/seehar-design-vue"></script>
</head>
```

#### jsdelivr

[资源浏览](https://cdn.jsdelivr.net/npm/seehar-design-vue/)

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/seehar-design-vue/lib/style.css" />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/seehar-design-vue"></script>
</head>
```

## 使用

### 全局引入

在`main.js`中

```js
import { createApp } from 'vue'
import App from './App.vue'
// 完整引入组件库
import SeeharDesign from 'seehar-design-vue'

const app = createApp(App)
// 全局安装
app.use(SeeharDesign).mount('#app')
```

组件当中

```vue
<ShButton :loading="true">按钮组件</ShButton>
```

### 按需引入

`main.js`中

```js
import { createApp } from 'vue'
import App from './App.vue'
// 按需引入
import { Button } from 'seehar-design-vue'

const app = createApp(App)

app.use(Button).mount('#app')
```

组件当中

```vue
<ShButton :loading="true">按钮组件</ShButton>
```

---

## 版本记录

[版本记录](CHANGELOG.md)

有问题欢迎 issue...

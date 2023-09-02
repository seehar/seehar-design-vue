# Seehar Design Vue

A Vue.js 3 UI library

[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)
[![Wei Design](https://img.shields.io/npm/v/seehar-design-vue.svg?style=flat-square)](https://www.npmjs.org/package/seehar-design-vue)

---

-   🔭 [Vite](https://vitejs.dev)
-   💪 [Vue3](https://vuejs.org)
-   🔥 TypeScript

[快速开始](https://seehar.github.io/seehar-design-vue/)

## 安装

node：>=16.0.0

### npm

这里推荐`pnpm`进行安装

```sh
pnpm install seehar-design-vue --save
```

### cdn

#### unpkg

[资源浏览](https://unpkg.com/seehar-design-vue/)

```html
<link rel="stylesheet" href="//unpkg.com/seehar-design-vue/lib/style.css" />
<script src="//unpkg.com/seehar-design-vue"></script>
```

#### jsdelivr

[资源浏览](https://cdn.jsdelivr.net/npm/seehar-design-vue/)

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/seehar-design-vue/lib/style.css" />
<script src="//cdn.jsdelivr.net/npm/seehar-design-vue"></script>
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

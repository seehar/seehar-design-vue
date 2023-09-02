---
title: 安装
lang: zh-CN
---

# 安装

## 版本

<p class="flex space-x-2">
  <a href="https://www.npmjs.com/package/seehar-design-vue"><img src="https://img.shields.io/npm/v/seehar-design-vue.svg?sanitize=true" alt="Version"></a>
  <a href="https://npmcharts.com/compare/seehar-design-vue?minimal=true"><img src="https://img.shields.io/npm/dm/seehar-design-vue.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/seehar-design-vue"><img src="https://img.shields.io/npm/l/seehar-design-vue.svg?sanitize=true" alt="License"></a>
</p>

Seehar Design Vue 目前还处于快速开发迭代中

## 使用包管理器

我们建议您使用包管理器（如 NPM、[Yarn](https://classic.yarnpkg.com/lang/en/) 或 [pnpm](https://pnpm.io/)）安装 Element Plus，然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev/) 或 [webpack](https://webpack.js.org/)。

::: code-group

```bash [npm]
npm install seehar-design-vue --save
```

```bash [pnpm]
pnpm add seehar-design-vue
```

```bash [yarn]
yarn add seehar-design-vue
```

:::

如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) 或 [中国 NPM 镜像](https://registry.npmmirror.com/)。

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Element Plus，然后就可以使用全局变量 ElementPlus 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com/) 和 [jsDelivr](https://jsdelivr.com/) 举例。 你也可以使用其它的 CDN 供应商。

### unpkg

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

### jsDelivr

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

::: tip
我们建议使用 CDN 引入 Element Plus 的用户在链接地址上锁定版本，以免将来 Element Plus 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。
:::

## Hello World

通过 CDN 的方式我们可以很容易地使用 Seehar Design Vue 写出一个 Hello world 页面。 [在线演示](https://codepen.io/seehar/pen/rNoLXPX)

<iframe height="400" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/seehar/embed/rNoLXPX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/seehar/pen/rNoLXPX">
  Untitled</a> by seehar (<a href="https://codepen.io/seehar">@seehar</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

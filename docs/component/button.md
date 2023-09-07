---
title: 按钮
lang: zh-CN
---

# 按钮 Button

## 基础用法

::: demo 使用 `type`、`size`、`round` 和 `loading` 来定义按钮的样式。 
button/basic
:::

## 点击事件

::: demo 点击事件 
button/event
:::

# Button API

## Button Attributes

| 属性名      | 说明         | 类型     | 默认值       |
|----------|------------|--------|-----------|
| type     | 类型         | `enum` | `default` |
| size     | 尺寸         | `enum` | `default` |
| color    | 颜色         |        |           |
| disabled | 	按钮是否为禁用状态 |        |           |
| circle   | 	是否为圆形按钮   |        |           |
| round    | 	是否为圆角按钮   |        |           |
| icon     | 图标组件       |        |           |
| loading  | 是否为加载中状态   |        |           |

## Button Slots

| 插槽名     | 	说明       |
|---------|-----------|
| default | 	自定义默认内容  |
| loading | 	自定义加载中组件 |
| icon	   | 自定义图标组件   |

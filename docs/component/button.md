---
title: 按钮
lang: zh-CN
---

# 按钮 Button

## 基础用法

::: demo 使用 `type`、`ghost` 和 `round` 来定义按钮的样式。
button/basic
:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

::: demo 使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。
button/disabled
:::

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

::: demo 使用 `icon` 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加 `<i>` 标签来添加图标， 你也可以使用自定义图标。
button/icon
:::

## 按钮组
以按钮组的方式出现，常用于多项类似操作。

使用 `<sh-button-group>` 对多个按钮分组。


## 加载状态按钮
点击按钮来加载数据，并向用户反馈加载状态。

::: demo 通过设置 `loading` 属性为 `true` 来显示加载中状态。
button/loading
:::


## 调整尺寸
除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

::: demo 使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。
button/size
:::

## 自定义颜色

您可以自定义按钮的颜色。

我们将自动计算按钮处于 `hover` 和 `active` 状态时的颜色。


## Button API

### Button Attributes

| 属性名      | 说明         | 类型     | 默认值       |
|----------|------------|--------|-----------|
| type     | 类型         | `enum` | `default` |
| size     | 尺寸         | `enum` | `default` |
| color    | 颜色         |        |           |
| disabled | 	按钮是否为禁用状态 |        |           |
| round    | 	是否为圆角按钮   |        |           |
| icon     | 图标组件       |        |           |
| loading  | 是否为加载中状态   |        |           |

### Button Slots

| 插槽名     | 	说明       |
|---------|-----------|
| default | 	自定义默认内容  |
| loading | 	自定义加载中组件 |
| icon	   | 自定义图标组件   |

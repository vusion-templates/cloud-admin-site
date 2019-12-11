# 初始化模板

工作中，遇到添加新模块、全局组件的时候，需要浪费一定的时间去做初始化的工作，而且容易忘记一些步骤。在这里基于 [plop](https://github.com/plopjs/plop) 提供了两个默认模板，帮助我们完成相关工作。

:::tip
后续如果有新需求，添加修改即可
:::

## 命令

```shell
npm run add
```

## 选项

### global component

会在全局组件目录创建全局组件。

支持两种写法，`u-text` 创建单文件组件，`u-text.vue` 创建多文件组件。

### module

负责初始化模块，会在 `src/views/dashboard` 目录创建对应的模块。

如果需要在侧边栏显示，可修改文件 `src/views/dashboard/modules.order.js`。

如果需要修改模块在侧边栏的显示文案，可修改 `[module]/module/base.js`，详细信息可点此 [导航-侧边栏](/guide/essentials/nav.html#侧边栏) 查看。

### page

负责初始化新页面，会在 `src/views` 目录创建新的目录，在 `src/pages` 添加新页面文件，同时添加相关配置至 `pages.json`。

初始化完成后，需要停止当前的 `dev server`，并重新启动，再访问相关的 `html` 路径即可查看最新的页面。

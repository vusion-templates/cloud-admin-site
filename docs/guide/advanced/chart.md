# 图表

对于简单的图表可以使用[组件库自带](https://vusion.github.io/cloud-ui/components/u-bar-chart)的。对于复杂的图表，推荐使用 [ECharts](https://www.echartsjs.com/zh/index.html)。

## ECharts & vue

底层封装可见 [vue-echarts](https://github.com/ecomfe/vue-echarts)。

## 使用

参考 `src/views/dashboard/demo/echarts/components/u-echarts.js` 即可。注意：用到相关的图表，需要手动引入对应的资源！

## online

[Echarts](https://vusion-templates.github.io/cloud-admin/#/chart/echarts)

:::tip
在使用 `vue-cli3` 的情况下，可能会遇到默认配置把 `node_modules` 中的文件排除在 `Babel` 转译范围以外的问题。参见[链接](https://github.com/ecomfe/vue-echarts#importing-the-source-version)。本项目已经处理。
:::

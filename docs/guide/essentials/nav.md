# 导航

## 侧边栏

侧边栏的信息由模块自身去定义。创建 `module/base.js` 并在其中声明导航的信息。同时在 `src/views/dashboard/modules.order.js` 中声明一下排序信息。

```javascript
{
    module: 'test',
    sidebar: {
        title: 'title'
        icon: 'svg-name',
        children: [],
        exist: false, // 控制显隐
    },
}
```

## 头部导航

同时支持头部导航，由于头部导航一般较为简单，在 `src/views/dashboard/index.vue` 定义即可。

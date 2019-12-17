# 布局

页面整体布局是一个产品最外层的框架结构，往往会包含导航、侧边栏、面包屑以及内容等。

## Layout

![layout](./layout.jpg)

其中被框住的部分均可以自定义。具体文件可查看 `src/global/layouts/l-dashboard.vue`。

## 网页标题

在 `app.config.js` 中可以设置网站标题，通过路由的 `meta` 的 `title` 属性可以设置子标题。默认的格式为 `子页面 - 网站标题`。

```javascript
meta: {
    title: '子页面',
},
```

## 面包屑

部分情况下，我们需要借助面包屑进行导航。在设置 `meta` 的 `crumb` 属性的情况下就会自动添加面包屑导航。

具体文件可查看 `src/views/dashboard/layout/components/s-crumb.vue`

```javascript
meta: {
    title: '子页面',
    crumb: {
        title: '首页',
        to: '/overview',
    },
    // crumb($routes) {
    //     return {
    //         title: '首页',
    //         to: '/overview',
    //     };
    // },
    // crumb: '首页',
},

```

::: tip
面包屑信息配置，具体可见 [u-crumb](https://vusion.github.io/cloud-ui/components/u-crumb)
:::

## 自定义面包屑

有些时候，会有自定义面包屑的需求，在这里我们通过以下方式去定制面包屑

```javascript
import { MPublisher } from 'cloud-ui.vusion';
export default {
    mixins: [MPublisher],
    created() {
        this.$publish('custom.crumb', [
            {
                title: 'test1',
                to: '/test1',
            },
            {
                title: 'test2',
                to: '/test2',
            }
        ]);
    },
};
```

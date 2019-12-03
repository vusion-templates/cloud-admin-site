# 路由

## 配置项

基础配置可以查看 [Vue Router](https://router.vuejs.org/)。推荐必要的路由都定义 `name` 属性，很多时候我们根据 `name` 而不是链接去确认一个路由。

```javascript
{
    name: '', // 不可重复
    meta: {
        title: String|Function,
        crumb: String|Function,
    },
}
```

### meta.title

更改浏览器标题[meta.title](/guide/essentials/title.html)

### meta.crumb

设置面包屑[meta.crumb](/guide/essentials/layout.html#面包屑)

## 路由懒加载

很多时候，页面一进来的时候，完全不需要加载所有的模块，这时候就需要利用懒加载的功能。所幸 `webpack` 和 `vue` 提供了相关功能，开启十分简单。

```javascript
const Foo = () => import(/* webpackMode: "lazy-once", webpackChunkName: "message" */ './message.vue');
```

:::tip
注释里面的内容不要忘记添加，如果没有注释里面的内容， `webpack` 会对每一个页面都生成一个 [chunk].js，粒度过细。通过 `webpackChunkName` 的设置， `webpack` 会对相同的 `webpackChunkName` 进行合并处理，一般推荐每个模块都有统一的 `webpackChunkName`
:::

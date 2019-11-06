# Pagination 分页

分页是一个很常见的需求，不过每个人的实现习惯都不太一样，而且总会遗漏一些边界逻辑。这里封装了一个 `mixin` 来帮助我们处理通用逻辑。具体可见 `src/global/mixins/page/page.js`。在此 `mixin` 上面，又扩展了一个和体验相关的常用需求，具体可见 `src/global/mixins/page/page.router.js`。

## page

+ 需要定义 `loadList` 方法，返回值需要是 `promise` 或者 `true`（`true` 代表延迟调用 `loadList`，调用时机需用户自行把握），同时需要在请求结束后对 `list`、`total` 等赋值。同时对列表接口 `loadList` 方法进行了增强，可获取状态 `loading` 、`loadError`、`loadDone`。
+ 可以通过 `lessQuota` 获取配额是否有剩余（默认是 `true`，在有数据的情况下会返回实际剩余配额），需要定义 `loadQuota` 方法（可选）主要是获取配额，同时需要对 `quota` 赋值。
+ 分页控件事件响应 `changePage`，提供 `totalPage`、`page` 取值
+ 提供修改每页条数的方法 `changeLimit`
+ 提供了获取调用远程接口参数的方法。 `getOffset`（用于接口发送 `offset`、`limit`），`getPage`（用于接口发送 `pageNum`、`pageSize`）
+ 提供安全删除实例的方法，用于最后一页只有一条的情况，同时会自动在待删除实例上添加 `deleting` 属性，需要定义 `deleteItem` 方法，返回值需要是 `promise` 或者 `true`（`true` 代表延迟调用）
+ 提供前端分页模式 `localPage`，默认 `false`，需要在请求结束后对 `originList` 赋值，如需刷新，调用 `refresh` 即可

## page.router

提供了 `page` 的所有能力，并且在体验方面进行了增强。仅仅需要在路由上配置 `name` 属性

+ 当页码、每页条数改变时，体现在浏览器地址栏上
+ 当每页条数改变时，会自动在 `localStorage` 存入相关配置，下次自动选中用户选择的条数

### 体验优化

试想一个场景，用户在第 20 页找到一个实例，点击查看详情，查看完毕，用户点击返回，肯定是期望回到第 20 页，这样就需要我们把页码信息一直在路由之间保留，但很多时候都未实现此逻辑。而本项目提供了一种较为简单的方法来实现此需求。使用起来非常简单，具体可见 `src/views/dashboard/demo/views/router/routes.js`

```js
// 在需要共享路由参数的共同上级路由声明如下信息：
meta: {
    locks: [{
        include: [/router/], // 在某些路由下生效
        // exclude: [], // 排除某些路由
        params: ['search', 'demo.router.list.page'], // 共享 'search', 'demo.router.list.page' 参数
    }],
},
```

用户如果在 `router/` 路由下面的子页面进行操作，无论写代码的时候，是否去声明 `search`、`demo.router.list.page`，只要对其在某个路由赋值，那么其他相关页面都会自动带上相关信息。

采用此方法之前，在相关子页面都需要进行如下声明：

```js
this.$router.push({
    name: '',
    query: {
        ...others,
        'demo.router.list.page': this.$route['demo.router.list.page'],
        search: this.$route.search,
    },
});
```

采用此方法之后，这些体验性的配置，不需要每次都加了。

```js
this.$router.push({
    name: '',
    query: {
        ...others,
    },
});
```

:::tip
对于用户右键点击新页面打开，这些参数是无法带过去的。当前页面点击是没有问题的。
:::

## online

[路由](https://vusion-templates.github.io/cloud-admin/#/demo/router/list)

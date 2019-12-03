# 新增

## 新增模块

每个页面都隶属于一个模块，当模块结构确认下来了，对于新增页面就非常容易了。下面举例如何新增一个模块。

首先在 `src/views/dashboard` 目录新建一个文件夹 `notice`，并创建一个 `routes.js` 文件，输入以下内容。

```javscript
import Wrapper from '@/global/layouts/l-wrapper.vue';
export default {
    path: 'notice',
    component: Wrapper,
    meta: {
        title: '系统通知',
    },
    children: [
        { path: '', redirect: 'list' },
        {
            path: 'list',
            component: () => import(/* webpackChunkName: 'demo' */ './views/list.vue'),
            meta: {
                title: '通知列表',
            },
        },
        {
            path: 'detail',
            component: () => import(/* webpackChunkName: 'demo' */ './views/detail.vue'),
            meta: {
                title: '通知详情',
            },
        },
    ],
};
```

再创建一个 `index.js`，输入如下内容：

```javascript
import routes from './routes';
import config from './module/base'; // 可选
export default {
    routes,
    config, // 可选
};

```

## 其他文件

+ 创建上面声明的 `views/notice.vue` 和 `views/notice.detail.vue` 页面
+ 创建 `service/index.js` 和 `service/apis.js` 两个文件用于生成接口信息
+ 创建 `components` 目录，用于放置业务自身的组件
+ 创建 `utils` 目录，用于放置业务自身的工具方法
+ 创建 `module/base.js`，用于放置该模块的配置

## 侧边栏

如果该模块需要在导航栏显示，那么不要忘记之前提到的[侧边栏](/guide/essentials/nav.html)

## 快速添加

现在(v0.2.0)可以通过运行命令 `npm run add` 添加一个模块，详情可见 [初始化模板](/guide/advanced/template.html)

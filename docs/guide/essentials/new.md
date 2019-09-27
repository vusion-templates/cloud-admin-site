# 新增

## 新增模块

每个页面都隶属于一个模块，当模块结构确认下来了，对于新增页面就非常容易了。下面举例如何新增一个模块。

首先在 `src/views/dashboard` 目录新建一个文件夹 `message`，并创建一个 `index.routes.js` 文件，输入以下内容。

```javscript
import Wrapper from '@/global/utils/wrapComponent';
import Message from './views/message.vue';
import MessageDetail from './views/message.detail.vue';
{
    path: 'message',
    component: Wrapper,
    meta: {
        title: '系统通知',
        crumb: {
            label: '系统通知',
        },
    },
    children: [
        {
            path: '',
            name: 'message.list',
            component: Message,
        },
        {
            path: 'detail',
            name: 'message.detail',
            component: MessageDetail,
            meta: {
                crumb: {
                    label: '通知详情',
                },
            },
        },
    ],
}
```

## 其他文件

+ 创建上面声明的 `views/message.vue` 和 `views/message.detail.vue` 页面
+ 创建 `service/index.js` 和 `service/apis.js` 两个文件用于生成接口信息
+ 创建 `components` 目录，用于放置业务自身的组件
+ 创建 `utils` 目录，用于放置业务自身的工具方法

## 侧边栏

如果该模块需要在导航栏显示，那么不要忘记之前提到的[侧边栏](/guide/essentials/nav.html)

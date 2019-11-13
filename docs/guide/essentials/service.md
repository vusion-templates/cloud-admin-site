# 接口

接口处理通常情况下，是一件很简单的问题，但是很多时候，会把其变得很复杂，无法维护。

这里设计了一套方案 [request-pre](https://github.com/zhangsanshi/request-pre) 来约束接口的使用。接口信息默认放在相关联的模块下面，不推荐放在全局。

:::tip
真正发送接口的时候，还是通过 `axios` 发送的。
:::

## 创建

```javascript
// 接口定义
import { createService } from '@/global/utils/services';
import apis from './apis';
const service = createService(apis, {
    config: {
        baseURL: 'https://api.apiopen.top/',
    },
    url: {
        path: '/message/add/{id}', // 支持变量，请求的路径
        method: 'post', // 请求方法
        body: {
            content: 'message',
        }, // 请求 body 部分
        headers: {
            xsrf: 'xsrf',
        }, // 请求 header 部分
        query: {
            search: 'A',
        }, // 请求的 search 部分
    }, // 这里最多只需要定义 headers、config，一般情况下，其他的都不需要
});
console.log(service.detail === service.$detail); // true
// 可以覆写暴露出去的 detail 方法，但不允许覆写 $detail 方法，同时也不允许外部调用 $detail 方法
service.detail = function (...args) {
    return service.$detail(...args).then();
};
console.log(service.detail === service.$detail); // false
export default service;
```

## api 规则

```javascript
// api 声明
export default {
    detail: {
        url: {
            path: '/message/add/{id}', // 支持变量，请求的路径
            method: 'post', // 请求方法
            body: {
                content: 'message',
            }, // 请求 body 部分
            headers: {
                xsrf: 'xsrf',
            }, // 请求 header 部分
            query: {
                search: 'A',
            }, // 请求的 search 部分
        },
        config: {
            baseURL: 'https://otherurl.com', // axios 使用，请求的域名，一般不需要写，跨域需要
        },
    },
};
```

## 使用

```javascript
import services from './service';
service.detail({
    path: {
        id: 1, // 路径支持参数
    },
    query: {
        other: 2,
    },
    body: {
        desc: 4,
    },
    headers: {
        // 可以定义 headers
    },
    config: {
        // 可以定义各种 config，用于下载或者其他用途
    },
});
```

## 说明

整体可以看到，通过此种约束，基本不存在乱写接口的可能。整套接口维护性也较好。

:::tip
如果需要定义额外的请求操作，可以修改调整 `src/global/utils/services/index.js`。

如果需要实现下载等功能，建议在 `config` 中设置 `download: true`，然后对此种类型的 `config` 进行扩展。
:::

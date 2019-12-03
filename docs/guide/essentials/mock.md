# Mock

市场有很多 `mock` 方案，在这里没有规定具体使用何种 `mock` 方案。这里借助于 [request-pre](https://github.com/zhangsanshi/request-pre) 对 `mock` 做了一个约定，遵守此约定的话，可以很方便的进行 `mock`。

## 使用

在这里定义了两个 `mock` 分别是 `success`、`fail`。

:::tip
这里不建议在 `api` 内声明 `mock`，会加大打包体积以及运行性能。可按照 [request-pre](https://github.com/zhangsanshi/request-pre) 的引用方式进行引用。
:::

```javascript
// api 声明
export default {
    detail: {
        url: {
            // ...
        },
        config: {
            // ...
        },
        mock: {
            success: {
                success: true,
                data: [],
            },
            fail: {
                success: false,
                data: [],
            },
        },
    },
};
```

`config.mock` 设置成上面定义的 `mock` 名即可

```javascript
import services from './service';
service.detail({
    path: {
        // ...
    },
    query: {
        // ...
    },
    body: {
        // ...
    },
    headers: {
        // ...
    },
    config: {
        mock: 'success',
    },
});
service.detail({
    path: {
        // ...
    },
    query: {
        // ...
    },
    body: {
        // ...
    },
    headers: {
        // ...
    },
    config: {
        mock: 'fail',
    },
});
```

## 说明

可以看到，此方案简单易行，对代码的侵入性低，而且可以任意切换接口的返回值。同时你可以采用任何动态生成 `mock` 的方案。

这里仅解决了本地 `mock` 的问题，至于对接远程 `mock` 服务器，可以通过 `webpack-dev-server` 去做。

# 后端联调

开发阶段，不免遇到需要和后端进行联调的情况。在这里，提供了两种方案来和后端进行联调

## index.html 放在前端

即前后端仅通过接口交流，或者后端能把 `cookie` 写入前端服务所在的域名，能保留登录状态。在这种情况下，只需要修改 `webpack.dev-server.js` 文件的 `proxy` 即可。

:::tip
如有更多定制需求，可见 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)。
:::

```javascript
// 将 proxy 注释打开，同时修改 target 即可。
const host = 'localhost';
const path = require('path');
const pages = require('./pages.json');
module.exports = function (port) {
    return {
        host,
        port,
        open: true,
        disableHostCheck: true,
        contentBase: path.join(__dirname),
        watchContentBase: false, // dev slow on Windows
        clientLogLevel: 'info',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        historyApiFallback: {
            rewrites: Object.keys(pages).map((k) => ({
                from: new RegExp('^' + k + '/'),
                to: '/' + k,
            })),
        },
        // proxy: [{
        //     context: ['**', `!${publicPathPrefix}/**`, '!/', '!/index.html', '!/index.html/'],
        //     target: 'http://test.com', // add host 127.0.0.1 test.com
        // }],
    };
};
```

## index.html 在后端

由后端提供入口页面，一般还会在页面中添加一些全局变量。在这种情况下，和上面的做法保持一致，其次移除 `'!/index.html'`, `'!/index.html/'`, `'!/'` 配置项。

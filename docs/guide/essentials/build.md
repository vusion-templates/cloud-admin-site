# 构建和发布

## 构建

当项目开发完毕，运行此命令就可以打包你的应用。

```shell
npm run build
```

构建打包成功之后，会在根目录生成 `public` 文件夹，里面就是构建打包好的文件。

:::tip
如果不想其在 `public` 目录输出，更改 `vue.config.js` 中的 `outputDir` 即可。
:::

更多自定义相关参数的设置，可参考 [Vue CLI](https://cli.vuejs.org/config/)

## 发布

对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 `public` 文件夹的静态文件发布到你的 `cdn` 或者静态服务器即可，需要注意的是其中的 `index.html` 通常会是你后台服务的入口页面，在确定了 `javascript` 和 `css` 的静态路径之后可能需要改变页面的引入路径，即注意(`index.html` 和 静态资源的引用路径是否正确)。

:::tip
部署时发现资源路径不对, 只需修改 `vue.config.js` 文件资源路径 `publicPath` 即可。
:::

## 环境变量

所有测试环境或者正式环境变量的配置都在 `.env.development` 等 `.env.xxxx` 文件中。通过调用命令的时候使用 `--mode xxx` 来使不同的配置文件生效。`development` 和 `production` 不需要。

:::tip
环境变量必须以 `VUE_APP_` 为开头。如: `VUE_APP_API`、`VUE_APP_TITLE`，它们都会通过 `webpack.DefinePlugin` 插件注入到全局。
:::

你在代码中可以通过如下方式获取:

```javascript
console.log(process.env.VUE_APP_xxxx);
```

## 构建相关

除了一些写在 `.env` 的环境变量之外，还有一些构建和部署相关的变量都是需要在 `vue.config.js` 中配置的。

你可以通过 `process.env.NODE_ENV` 来执行判断环境，来设置不同的参数。

具体代码可借鉴 `vue.config.js`

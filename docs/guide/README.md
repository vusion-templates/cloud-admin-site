# 介绍

[cloud-admin](https://github.com/vusion/cloud-admin) 是一套开箱即用的中台前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [cloud-ui](https://github.com/vusion/cloud-ui) 实现。本项目借助于 cloud-ui 组件库，提供了丰富的组件功能，另外，基于团队对中台项目多年实践经验的积累，内置了一大批业务模型。

:::tip
很多时候，项目用不到代码编辑器等功能，这里提供了一个精简版本的模板库，方便二次开发。

+ 集成方案 [cloud-admin](https://github.com/vusion/cloud-admin)
+ 基础模板 [cloud-admin-lite](https://github.com/vusion-templates/cloud-admin-lite)

:::

## 功能

```
- 多环境发布
  - dev sit stage prod

- 全局功能
  - 国际化多语言
  - 动态侧边栏
  - 动态面包屑
  - Svg Sprite 图标
- 错误页面
  - 404
  - 500
- 编辑器
  - JSON 等多格式
  - 富文本编辑器
  - Markdown 编辑器
- ECharts 图表
- Dashboard
- 列表页
```

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [cloud-ui](https://github.com/vusion/cloud-ui)，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 目录结构

本项目已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── babel.config.js # babel-loader 配置
├── dll # dll 相关
│   ├── vendor.js
│   ├── vendor.manifest.json
│   ├── vendor.manifest.online.json
│   └── vendor.online.js
├── jsconfig.json # jsconfig.json
├── package-lock.json # package-lock.json
├── package.json # package.json
├── src #源码
│   ├── global # 公共部分
│   │   ├── components # 全局公用组件
│   │   │   ├── cloud-ui # 覆盖 ui 库组件
│   │   │   │   ├── i-icon # 自定义 font
│   │   │   │   │   ├── assets
│   │   │   │   │   │   └── notice.svg
│   │   │   │   │   └── index.vue
│   │   │   │   ├── index.js
│   │   │   ├── common # 业务组件
│   │   │   │   ├── index.js
│   │   │   └── index.js
│   │   ├── directives # 全局指令
│   │   ├── filters # 全局 filters
│   │   ├── mixins # 全局 mixin
│   |   |   └── page # page mixin
│   │   ├── rules # 全局表单验证规则
│   │   ├── styles # 全局样式
│   │   │   ├── index.css # 基础样式（vusion.config.js 内定义的 baseCSSPath）
│   │   │   ├── theme.css # 主题样式（vusion.config.js 内定义的 globalCSSPath）
│   │   │   └── variables.css # 业务全局 css 变量
│   │   ├── page # 页面公共方法
│   │   │   ├── i18n.js # 加载 i18n
│   │   │   ├── index.js # page 首页
│   │   │   ├── library.js # 加载 ui 库
│   │   │   ├── modules.js # 组合 modules 配置
│   │   │   └── router.js # 路由默认处理
│   │   └── utils # 全局工具方法
│   │       ├── services # 请求基础方法
│   │       │   └── index.js
│   │       └── storage # localStorage 定义
│   │           └── localStorage.js
│   ├── static # 静态资源
│   ├── pages # 后台模板
│   │   ├── dashboard.html # 首页
|   |   └── favicon.ico # 图标
│   └── views # views 所有页面
├── tests # 测试
├── ui # UI 库独立打包目录，用于加速构建
├── pages.json # 页面配置
├── plopfile.js # plop 脚本
├── tsconfig.json # tsconfig.json
├── vue.config.js # vue-cli 配置
├── vusion.config.js # vusion 配置
└── webpack.dev-server.js # webpack dev server
└── webpack.dll.config.js # webpack dll
```

## 安装

```bash
# 克隆项目
git clone https://github.com/vusion/cloud-admin.git

# 进入项目目录
cd cloud-admin

# 安装依赖
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run dev
```

启动完成后打开浏览器访问 [http://localhost:8810](http://localhost:8810) 即可。

## Contribution

本文档项目地址 [cloud-admin-site](https://github.com/vusion/cloud-admin-site) 基于 [vuepress](https://github.com/vuejs/vuepress)开发。

有任何修改和建议都可以该项目 pr 和 issue

同时参考了 [vue-element-admin-site](https://github.com/PanJiaChen/vue-element-admin-site) 一些内容。

## Browsers Support

Modern browsers and Internet Explorer 10+.

<!-- prettier-ignore -->
| [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## Vue 生态圈

**首先了解这些 vue 生态圈的东西，会对你上手本项目有很大的帮助。**

1. [Vue Router](https://router.vuejs.org/) 是 `vue` 官方的路由。它能快速的帮助你构建一个单页面或者多页面的项目。

2. [Vue Loader](https://vue-loader.vuejs.org) 是为 `vue` 文件定制的一个 `webpack` 的 `loader`，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件。它能在开发过程中使用热重载来保持状态，为每个组件模拟出 `scoped CSS` 等等功能。不过大部分情况下你不需要对它直接进行配置，脚手架都帮你封装好了。

3. [Vue Test Utils](https://vue-test-utils.vuejs.org/) 是官方提供的一个单元测试工具。它能让你更方便的写单元测试。

4. [Vue Dev-Tools](https://github.com/vuejs/vue-devtools) `Vue` 在浏览器下的调试工具。写 `vue` 必备的一个浏览器插件，能大大的提高你调试的效率。

5. [Vue CLI](https://cli.vuejs.org/) 是官方提供的一个 `vue` 项目脚手架，本项目也是基于它进行构建的。它帮你分装了大量的 `webpack`、`babel` 等其它配置，让你能花更少的精力在搭建环境上，从而能更专注于页面代码的编写。不过所有的脚手架都是针对大部分情况的，所以一些特殊的需求还是需要自己进行配置。建议先阅读一遍它的文档，对一些配置有一些基本的了解。

6. [vue-cli-plugin-vusion](https://github.com/vusion/vue-cli-plugin-vusion) 是 `Vue CLI` 的一个插件，增加了一些特有功能的适配。

7. [Vetur](https://github.com/vuejs/vetur) 是 `VS Code` 的插件. 如果你使用 `VS Code` 来写 `vue` 的话，这个插件是必不可少的。

# 代码编辑器

在这里提供了两个方案，一个是在业务中具体使用的 [brace](https://github.com/thlorenz/brace)，另一个是 `vscode` 的底层编辑器 [monaco](https://github.com/microsoft/monaco-editor)。

## brace

`brace` 实际上对 [ace](https://github.com/ajaxorg/ace) 进行了包装，以达到更好的浏览器兼容性。通过例子可以看到编辑器还是比较复古的。

### brace 使用

如果需要使用不同的语言以及主题。记得要修改 `src/views/dashboard/demo/views/editors/components/u-brace.js` 文件的如下引用：

```js
import XAceEditor from '@cloud-ui/x-ace-editor.vue';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
export default XAceEditor;
```

### brace & vue

具体的封装可见 [@cloud-ui/x-ace-editor.vue](https://vusion.github.io/cloud-ui/vendors/x-ace-editor)

## monaco

前端习惯使用 `vscode`，见到 `monaco` 会觉得界面很亲切。

### monaco 使用

如果需要使用不同的语言以及主题，会稍微麻烦点。在 `vue.config.js` 文件添加相关逻辑，并且重启项目开发环境。

```js
config.plugin('monaco-editor').use(require('monaco-editor-webpack-plugin'), [{
    languages: ['javascript', 'json', 'markdown', 'typescript'],
}]);
```

### monaco & vue

具体的封装可见 [vue-monaco](https://github.com/egoist/vue-monaco)，此封装有一定的问题，如果需要深度定制，模拟重新封装即可。

## codemirror

`codemirror` 也是一个很好的选择，但这里并没有具体研究。

## 其他

上面三种均可以满足日常需求，选择一种使用即可。

## online

[code-editor](https://vusion-templates.github.io/cloud-admin/#/demo/editors/code/monaco)

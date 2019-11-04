# 富文本编辑器

市场上有不少富文本编辑器供选择，在这里参考了 [vue-element-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/feature/component/rich-editor.html) 的意见，使用了 [Tinymce](https://github.com/tinymce/tinymce)。

## 引用方式

`vue-element-admin` 未提供通过代码直接引用的方案（目前是异步加载 `CDN` 的引入方式），`cloud-admin` 通过研究解决了此问题，相关描述如下。可以在 `src/views/dashboard/demo/editors/components/u-tinymce.js` 查看具体实现。

### 难点

1. 默认情况下，`Tinymce` 有自己的样式加载方案，且 `css` 路径均写死，所以在初始化的时候需要禁止 `Tinymce` 自加载。

2. 禁用自加载后，则需要手动加载样式。样式分两块，一块是整个编辑器的样式，另一块是内容的样式。内容默认是采用 `iframe` 的形式进行渲染的。对于编辑器的样式可以直接 `import` 即可，但是对于内容，由于其在 `iframe` 内，则需要在初始化时传入 `!!raw-loader!tinymce/skins/ui/oxide/content.css` + `!!raw-loader!tinymce/skins/content/default/content.css`。

3. 另一部分是 `plugin` 的 `js` 文件的引入问题，这些文件路径也是写死的。一般情况下，我们可以通过 `copy-webpack-plugin` 去解决。

## vue

这里是直接使用官方直接封装的版本 [tinymce-vue](https://github.com/tinymce/tinymce-vue)，如果另有需求，可以自行封装相关逻辑。

## online

[rich-editor](https://vusion-templates.github.io/cloud-admin/#/editor/rich-editor)

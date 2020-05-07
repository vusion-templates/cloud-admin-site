# 样式

## CSS Modules

在样式开发过程中，有两个问题比较突出：

+ 全局污染 —— `CSS` 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 `build` 后生成文件中的先后顺序，后面的样式会将前面的覆盖；

+ 选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标示，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多，最终导致难以维护。

同时为了解决上述问题，社区也提出了很多方案。在这里采用的是 [CSS Modules](https://github.com/css-modules/css-modules) 和 [PostCss](https://github.com/postcss/postcss) 配合方案。

```css
/* 编译前 */
.item {
  color: red;
}

/* 编译后 */
.item_2qBngsv9 {
  color: red;
}
```

只要加上 `<style module>` 这样 `css` 就只会作用在当前组件内了。在使用的时候，引用方式 `:class="$style.side"` 或 `:class="[$style.side"]`

## 更改浏览器默认样式

很多时候，我们需要重置浏览器样式，需要在所有 `css` 脚本之前引入。通过在 `vusion.config.js` 定义 `baseCSSPath: "src/global/styles/index.css"`，再修改相关 `css` 配置， 即可重置浏览器样式。

## 更改组件库主题样式

通过在 `vusion.config.js` 定义 `globalCSSPath: "src/global/styles/theme.css"`，再修改相关变量配置，即可更改组件库主题样式。

## 修改组件库的样式

由于组件库也是采用 `Css Modules` 的方案，故一般情况下较难修改组件库的样式，这里采用了一种较为繁琐的方案。在 `src/global/components/cloud-ui` 中，创建相关文件，在 `cloud-ui` 组件库引入后，再引入此组件。

```vue
<script>
import { IIcon } from 'cloud-ui.vusion';
export default {
    name: 'i-icon',
    extends: IIcon,
};
</script>
<style module>
@import 'cloud-ui.vusion/src/components/i-icon.vue/module.css';
.root[name="notice"]:before {
    font-size: inherit;
    margin: 0px;
    vertical-align: middle;
    icon-font: url(./assets/notice.svg);
}
</style>
```

## 业务全局 CSS 变量

在 `src/global/styles/theme.css` 此文件定义即可。会随着 `globalCSSPath` 一起注入到每个 css 文件中。

## browserslist

通过配置 `.browserslistrc`，可以设置项目的浏览器兼容

```
> 1%
last 2 versions
ie >= 10
```

+ \> 1% 兼容全球使用率大于 1%的浏览器
+ last 2 versions 兼容每个浏览器的最近两个版本
+ ie >= 10 兼容 ie10 及以上

具体可见 [browserslist](https://github.com/browserslist/browserslist)

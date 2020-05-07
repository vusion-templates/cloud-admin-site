# 图标

如果你没有在本项目中找到需要的图标，可以到 [iconfont.cn](https://www.iconfont.cn/) 上选择并生成自己的业务图标库，再进行使用。或者其它 `svg` 图标网站，下载 `svg` 并设置中就可以了。

## 自定义图标

项目中已经写好该文件 `src/global/components/cloud-ui/i-icon/index.vue`，对于新增图标，直接添加文件，并声明即可。

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

## 使用

```html
<i-icon name="notice"></i-icon>
```

## 改变颜色

直接设置其 `style` 属性 `color` 即可改变颜色。

## 更多

可查看 [i-icon](http://github.com/vusion/icon-sets) 文档

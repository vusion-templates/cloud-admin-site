# ESLINT

不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。

## 配置项

所有的配置项都在 `.eslintrc` 中，采用的 `eslint` 配置是基于 [vusion/all](https://github.com/vusion/code-style)。

## 编辑器插件

这里推荐使用 `VSCODE`，同时安装 `eslint`、`Vetur`。安装完成后，依次点击 `文件 > 首选项 > 设置` 打开 VSCode 配置文件,添加如下配置

```json
{
  "files.autoSave": "off",
  "eslint.validate": [
    "javascript",
    "vue-html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.run": "onSave",
  "eslint.autoFixOnSave": true
}
```

这样每次保存的时候就可以根据根目录下 `.eslintrc` 你配置的 `eslint` 规则来检查和做一些简单的 `fix`。

## 自动修复

通过运行命令 `npm run lint:fix`，可以自动修复大部分的写法错误。具体可查看[lint:fix](/guide/essentials/scripts.html#lint-fix)

# Git Hooks

很多时候，项目没有建设 `ci/cd`，仅凭写代码的时候通过 `IDE` 做 `lint` 检查，是很容易上传不规范的代码的。所以这里利用 `git hooks` 在提交之前会做一次 `lint` 检查。

## husky

一般我们不会手动更改 [pre-commit](https://github.com/observing/pre-commit)，而且修改后，没有办法加入 `git` 版本控制之中。这里使用 [https://github.com/typicode/husky](https://github.com/typicode/husky) 去做这件事。安装后，修改 `package.json`，增加配置：

```javascript
"husky": {
    "hooks": {
      "pre-commit": "eslint ./src/**/*.{js,vue}"
    }
}
```

## lint-staged

可以仔细观察上面的命令，会发现每次它都检查整个目录，但实际我们每天提交，只会修改部分代码。从一个方面来说，对整个目录的检查是没有必要的，另一方面来说，万一别人出了错，会导致自己无法提交。所以为了解决这个问题，就有了 [lint-staged](https://github.com/okonet/lint-staged)。它只会校验检查你提交的部分内容。安装后，修改 `package.json` 配置：

```javascript
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,vue}": [
      "npm run lint -- --fix",
      "git add"
    ]
  }
```

对于能自动修复的 `eslint` 错误，它会静默的帮你修复。对于不能修复的错误，会在控制台打印错误信息，阻止提交，后续只需要按照要求修复重新提交即可。

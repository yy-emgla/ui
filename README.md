## Introduction

```bash
.
├── LICENSE
├── README.md
├── build (打包流程)
│   ├── build-entry.js
│   ├── build-style.js
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.lib.conf.js
│   └── webpack.prod.conf.js
├── config (项目配置)
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── dist (文档编译目录)
├── examples (文档源文件)
│   ├── demo.vue
│   ├── doc.vue
│   ├── docs (多语种Markdown文档)
│   ├── example.js (示例入口)
│   ├── icon.css
│   ├── index.js (文档入口)
│   ├── index.tpl (文档DOM模版)
│   ├── lang.js (示例语言设置)
│   ├── md.css
│   ├── nav.json (文档map)
│   ├── route.js (文档&示例通用路由)
│   └── views (项目示例界面)
├── lib (库文件编译目录)
├── node_modules
├── package.json
├── src (库项目源文件)
│   ├── components
│   ├── index.js
│   ├── locale
│   ├── mixins
│   ├── plugins
│   ├── styles
│   └── utils
├── static (仅存放不需要处理的资源)
├── test
│   └── unit
└── yarn.lock
```

## Install

添加Dependencies：

```json
dependencies: {
  "fdk-ui": "git+git@github.com:yy-emgla/ui.git"
}
```

```bash
yarn
```

## Quick Start

```bash
yarn start
```

## Commit Guide
commit信息格式为：`<type>(<scope>): <subject>`

```
  1. type — 提交 commit 的类型
      ○ feat: 新功能
      ○ fix: 修复问题
      ○ docs: 修改文档
      ○ style: 修改代码格式，不影响代码逻辑
      ○ refactor: 重构代码，理论上不影响现有功能
      ○ perf: 提升性能
      ○ test: 增加修改测试用例
      ○ chore: 修改工具相关（包括但不限于文档、代码生成等）
      ○ deps: 升级依赖
  2.  scope — 修改文件的范围，可选，包括但不限于 Button、CheckBox 等。
  3. subject — 用一句话清楚的描述这次提交做了什么。
```

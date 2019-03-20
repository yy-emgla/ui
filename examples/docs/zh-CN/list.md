## List 列表

### group基础用法
* group组件需要配合cell组件一起使用，才会提供响应的label样式以及cell间距等样式功能
```html
    <ui-group>
      <ui-cell title="My Account" value="Protected" ></ui-cell>
      <ui-cell title="Money"></ui-cell>
      <ui-cell title="Withdraw" disabled is-link></ui-cell>
    </ui-group>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|title | 列表group的title |String(html) |————|———— |
|titleColor | title颜色代码 |String |————|———— |
|labelWidth | label宽度 |String |————|———— |
|labelMarginRight | label的右边距marginRight |String |————|———— |
|gutter | cell之间的间距（marginTop） |String, Number |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |
|after-title | title后内容插槽 |

### cell基础用法

*见对应[cell组件](/#/zh-CN/cell "Title")

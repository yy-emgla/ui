## Button 按钮
### 基础用法

```html
<ui-button type="primary">type primary</ui-button>
<ui-button type="warn">type warn</ui-button>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|type | button组件类型 |String |primary, default, warn|default |
|disabled | 可点击 |Boolean |————|———— |
|mini | 是否mini |Boolean |————|———— |
|plain | 是否扁平化展示 |Boolean |————|———— |
|text | 按钮内容文字 |String |————|———— |
|actionType | 组件内部按钮type |String |————|button |
|loading | 是否加载中 |Boolean |————|———— |
|gradients | 渐变样式数组 |Array（长度为2） |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容（如若没有显示text） |

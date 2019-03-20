## TabBar 导航条

### 基础用法

```html
<ui-tabbar>
  <ui-tabbar-item selected>
    <ui-badge :value="100" :max="99"></ui-badge>
    <img slot="icon" src="//dummyimage.com/80">
    <span slot="label">微信</span>
  </ui-tabbar-item>
</ui-tabbar>
```

### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|value |选中值，用v-model绑定 |Number |————|———— |
|iconClass |icon类名 |String |————|———— |


### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |


### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-index-change | (newVal, oldVal) | 选中下标改变事件 |

## ui-tabbar-item
### ui-tabbar-item 的基础用法（当且仅当ui-tabbar组件中使用）

### Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|selected |是否选中 |[String, Object] |————|———— |
|iconClass |icon类名，优先级比tabbar的iconClass高 |String |————|———— |


### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |
|icon | 非选中状态下icon插槽 |
|icon-active | 选中状态下icon插槽 |
|label | tabbar-item下方label插槽 |

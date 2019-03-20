## Popup 弹出框

### 基础用法

```html
    <ui-popup v-model="show"
              :header="header"
              :height="height"
              @cancel="cancel"
              :showMask="showMask"
              :headerText="text">
        hello world
    </ui-popup>
    export default {
      data() {
        return {
          show: false,
          header: true,
          height: '50%',
          showMask: false,
          text: '^.^',
        }
      },
      methods: {
        cancel() {
          console.info(取消)
        }
      }
    }
```
### attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|value | popup绑定值，是否弹出，用v-model绑定 |Boolean|————|false |
|header | 是否展示头部 |Boolean|————|false |
|headerText | 头部中间文字内容 |String|————|———— |
|headerTextClass | 头部中间文字类名 |String|————|ui-popup-header-text |
|height | popup高度，如果有header包括header,可以是XXpx\|\|XX%\|\|auto |String|————|238px |
|showMask | 是否展示遮罩层 |Boolean|————|true |
|closeByMask | 是否点击遮罩层关闭popup |Boolean|————|true |
|cancelText | 取消按钮文本 |String|————|取消 |
|confirmText | 确认按钮文本 |String|————|确认 |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|—— | 默认显示内容 |
|header | 头部插槽，如若没有显示“取消”，“确认”按钮以及头部内容 |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-change | (newVal, oldVal) | 选中值改变事件 |
|cancel | ———— | 取消按钮点击事件 |
|onShow | ———— | 显示事件 |
|onHide | ———— | 隐藏事件 |

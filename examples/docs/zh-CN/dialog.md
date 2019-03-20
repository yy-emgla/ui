## Dialog 对话框

### 基础用法

```html
<ui-cell title="dialog弹窗">
  <ui-switch v-model="dialog"></ui-switch>
</ui-cell>

<ui-dialog
  @on-click="dialog = false"
  @on-cancel="dialog = false"
  :show.sync="dialog">
  默认的dialog
</ui-dialog>

<script>
  export default {
      data() {
          return {
            dialog: false,
          };
      },
  }
</script>
```
### 属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|show | 显示 |Boolean |————|false |
|alert | 是否为"alert"模式."alert"模式dialog脚部只有确定按钮 |Boolean |————|false |
|is-android | 是否为Android模式.Android模式下,确定和取消按钮的位置有所不同. |Boolean |————|false |
|title | dialog弹窗的标题 |String |———— |———— |
|top | dialog样式的top属性 |String |———— |50% |
|confirm-text | 确认按钮的文字 |String |———— |'确认' |
|cancel-text | 取消按钮的文字 |String |———— |'取消' |

### 事件

| 事件      | 参数    | 说明      |
|---------- |-------- |---------- |
|on-click | ———— |点击确认按钮触发的函数 |
|on-cancel | ———— |点击取消按钮触发的函数 |

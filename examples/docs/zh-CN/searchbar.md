## SearchBar 搜索栏

### 基础用法

```html
    <ui-search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
    </ui-search>
    <script>
    export default {
      data () {
        value: '',
        results: []
      },
      methods: {
        resultClick (item) {},
        onFocus () {},
        onCancel () {},
        onSubmit () {},
      }
    }
    </script>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|required |是否必须 |Boolean |————|false |
|placeholder |输入框placeholder属性 |String |————|———— |
|cancelText |取消文本 |String |————|取消 |
|value |输入框内容，用v-model绑定 |String |————|———— |
|results |展示结果 |Array |————|———— |
|autoFixed |是否固定顶端，注意如果设置autoScrollToTop下方元素会有上浮的动作 |Boolean |————|true |
|top |当处于fixed状态下时，顶端距离 |String |————|0px |
|position |当处于fixed状态下时，是什么定位 |String |————|fixed |
|autoScrollToTop |当处于fixed状态下时，是否自动滚动到顶端 |Boolean |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |
|left| 位于输入框左边插槽 |
|right| 位于输入框右边插槽 |


### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-change | ———— | 搜索框内容改变事件 |
|on-submit | （value） | 表单提交事件 |
|on-cancel | ———— | 点击取消按钮事件 |
|on-focus | ———— | 输入框聚焦事件 |
|on-blur | ———— | 失去焦点事件 |
|on-result-click |（item）| 搜索结果点击事件 |
|on-touch |————| label点击事件 |

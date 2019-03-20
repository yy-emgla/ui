## Checkbox 复选按钮

### 基础用法

```html
  <ui-checkbox title="max=1"
    :options="commonList"
    v-model="value"
    :max="1"
    @on-change="change">
  </ui-checkbox>
  <script>
  export {
    data () {
      return {
        commonList: ['China', 'Japan', 'America'],
        value: ['China']
      }
    },
    methods: {
      change (val) {
        //
      }
    }
  }
  </script>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|value | 当前checkbox选中的值 |Array |————|———— |
|required | 是否必须 |Boolean |————|———— |
|title | 名称 |String |————|———— |
|showError | 是否展示错误 |String |————|———— |
|options | 可选项：可以是单个内容作为数组元素，也可以由{key:XX,value:XX}格式的对象作为元素 |Array |————|———— |
|max | 最多选中值数量 |Number |————|———— |
|min | 最少选中值数量 |Number |————|———— |
|fillMode | 填充模式 |Boolean |————|———— |
|checkDisabled | 是否检查禁用 |Boolean |————|true |
|labelPosition | label位置 |Boolean |————|———— |
|disabled | 是否禁用 |Boolean |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |
|after-title | 位于title后的内容插槽 |
|footer | 组件底部插槽 |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-change | val 当前选中数据, label 当前选中数据中页面展示内容 | 选中改变 |
|on-error | err 错误信息 | 错误函数 |
|on-clear-error | ———— | 清除错误函数 |

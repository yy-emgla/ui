## SelectInline 行内选择器

### 基础用法

```html
<ui-select-inline slot="value" v-model="value" :options="options" :max=2>
  <template slot-scope="scope">
    <p class="select-item"
       v-bind:class="{'item-checked': scope.item.checked}">{{scope.item.val}}</p>
  </template>
</ui-select-inline>
<script>
  export default {
    data () {
      return {
        value: [],
        options: ['China', 'Japan'],
      }
    },
    methods: {
      change (value, label) {
        console.info(value, label)
      }
    }
  }
</script>
```
### attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|value | 当前selectInline选中的值 |Array |————|———— |
|required | 是否必须 |Boolean |————|———— |
|isText | 候选项是否文字样式 |Boolean |————|———— |
|bText | 组件前置文字内容 |String |————|———— |
|showError | 是否展示错误 |String |————|———— |
|options | 可选项：可以是单个内容作为数组元素，也可以由{key:XX,value:XX}格式的对象作为元素 |Array |————|———— |
|max | 最多选中值数量 |Number |————|———— |
|min | 最少选中值数量 |Number |————|———— |
|checkDisabled | 是否检查禁用 |Boolean |————|true |
|disabled | 是否禁用 |Boolean |————|———— |

### Slot

| 名称      | 说明    | 属性(作用域插槽) |
|---------- |-------- |-------- |
|- | 候选项每项的显示插槽 |{val:当前首选项,index:当前候选项的下标, checked: 是否被选)}|
|before | 组件前置内容插槽，如若没有显示BText属性 |————|

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-change | val 当前选中数据, label 当前选中数据中页面展示内容 | 选中改变 |
|on-error | err 错误信息 | 错误函数 |
|on-clear-error | ———— | 清除错误函数 |

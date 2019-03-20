## Radio 单选按钮

### 基础用法

```html
  <ui-radio :options="radio1" value="China" disabled></ui-radio>
        <ui-radio
          fill-mode
          :selected-label-style="{color: '#FF9900'}"
          :options="radio2"
          v-model="radio1Value"
          @on-change="change"></ui-radio>
<script>
  export default {
    data () {
      return {
        radio1: ['China', 'Japan'],
        radio2: [{
             icon: '//dummyimage.com/110',
             key: '001',
             value: 'radio001',
           }, {
             icon: '//dummyimage.com/110',
             key: '002',
             value: 'radio002',
           }],
        radio1Value: '001'
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
|options | 单选组件带选项，可以[value...]格式的数组，也可以是[{key,value,icon}...] |Array |————|———— |
|value | 当前单选radio选中的值，用v-model绑定 |String, Number |————|———— |
|fillMode | 填充模块 |Boolean |————|false |
|fillPlaceholder | 填充模块输入框的Placeholder属性 |String |————|其他 |
|fillLabel | 填充模块label内容 |String |————|其他 |
|disabled | 是否禁用 |Boolean |————|———— |
|selectedLabelStyle | 选中样式，按照行内样式style格式编写 |Object |————|———— |

### Slot

| 名称      | 说明    | 属性(作用域插槽) |
|---------- |-------- |-------- |
|each-item | 候选项每项的显示插槽 |label(候选项label),icon(候选项图标),index(候选项下标),selected(是否被选中)|

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-change | newValue(当前选中值), label(选中后选项的label) | 选中值改变事件 |

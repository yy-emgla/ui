## Picker 选择器
### 基础用法
```html
    <ui-picker :show.sync="show"
      :data='data'
      v-model='year1'
      @on-change='change'></ui-picker>
  <script>
  export default {
    data () {
      return {
        show: false,
        data: [0, 1, 2, 3, 4]
      }
    },
    methods: {
      change (val) {
        console.info(val)
      }
    }
  }
  </script>
```
### attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|show | 是否展示，需要sync绑定 |Boolean |————|false |
|header | 是否展示头部 |Boolean |————|false |
|data | 候选项列表,格式可以是\[[value...]](非联动)\[[{name,value}...]](非联动),\[{name,value,parent}...](联动) |Array |————|———— |
|columns | 指定联动模式下的列数，当不指定时表示非联动 |number |————|———— |
|fixedColumns | 指定显示多少列，其余给予隐藏 |Number |————|0 |
|value | 当前picker选中的值，用"v-model"绑定 |Array |————|———— |
|columnWidth | 定义每一列宽度，不需要定义除最后一列宽度，最后一列自动宽度 |Array |————|———— |


### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-change | value | 当前选择值变化触发函数 |
|cancel | (event) | 点击取消按钮事件 |
|confirm | (value, event) | 点击确认按钮事件 |

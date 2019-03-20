## Slider 滑块

### 基础用法

```html
<ui-slider v-model="value" :min="10" :max="90" disabled></ui-slider>
 <ui-slider v-model="value2" :min="10" :max="90" :line-width="4" :back-color="'#555555'"></ui-slider>
 <script>
 export default {
   data () {
      return {
        value: 0,
        value2: 0,
      }
   }
 }
 </script>
```

### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|value | 滑块值，用v-model绑定 |Number |————|———— |
|max | 最大值 |Number |————|100 |
|min |最小值 |Number |————|0 |
|step |设置步长 |Number |————|1 |
|disabled |禁用滑块 |Boolean |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|handle | 滑块插槽 |

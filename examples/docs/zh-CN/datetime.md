## Datetime 时间日期

### 基础用法

```html
<ui-datetime v-model="date"></ui-datetime>
<script>
  export default {
      data() {
          return {
            date: '2018-05-16'',
          };
      },
  }
</script>
```

### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|value | 值，v-model来绑定，都会更改成Date类型 |String(yyyy-MM-dd),Data |————|———— |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-change | val 当前选中数据 | 选中改变 |

## Switch 切换按钮

### 基础用法

```html
<ui-switch v-model="open" disabled></ui-switch>
 <ui-switch v-model="open1" :valueMap="valueMap"></ui-switch>
 <script>
 export default{
    data() {
      return {
        open: false,
        open1: 'close',
        valueMap: ['close', 'open'],
      }
    }
 }
 </script>
```

### API

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|disabled |禁用 |Boolean |————|———— |
|value |当前switch绑定值，和valueMap中的元素有对应，用v-model绑定 |Boolean, String, Number |————|false |
|valueMap |switch开关对应的数据数组（长度为2），下标为零的表示关闭状态对应的值，下标为1表示开的状态对应的值 |String |————|[false, true] |
|preventDefault |是否阻止冒泡 |Boolean |————| ———— |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-change | (value, oldValue) | switch绑定值change事件 |

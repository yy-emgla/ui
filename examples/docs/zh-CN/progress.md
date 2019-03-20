## Progress 进度条

### 基础用法

```html
<ui-progress :percent="30" :show-cancel="false" @on-cancel="progress=0"></ui-progress>
```

### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|percent | 进度值 |Number |0-100|———— |
|show-cancel |是否显示清空进度条图表 |Boolean|true, false|———— |
|on-cancel |清空进度条事件 |Function|————|———— |

## Msg 操作提示页

### 基础用法

```html
<ui-msg success
  btn="推荐操作"
  btn-other="辅助操作">
  内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
  <a href="">文字链接</a>
</ui-msg>
```

### API

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|success |操作状态提示 |Boolean |————|true |
|btn |操作按钮 |Boolean, String |————|———— |
|btn-other |辅助操作按钮 |Boolean, String |————|———— |

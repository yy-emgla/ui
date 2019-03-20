## Preview 表单预览

### 基础用法
* preview 需要结合preview-item一同使用

```html
    <ui-preview btn="mainBtn" btnOther="othBtn" @on-click="onClick" @on-click-other="otherClick">
      <ui-preview-item label="label1">label1</ui-preview-item>
      <ui-preview-item label="label2">label2</ui-preview-item>
      <ui-preview-item label="longLabel">longlonglonglonglonglonglonglonglonglonglonglong</ui-preview-item>
    </ui-preview>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|btn | 主按钮 |Boolean, String |————|———— |
|btnOther | 其他按钮 |Boolean, String |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-click | ———— | 主按钮点击事件 |
|on-click-other | ———— | 其他按钮点击事件 |


### preview-item基础用法
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|label | label显示内容 |String |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

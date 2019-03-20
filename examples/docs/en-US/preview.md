## Preview

### Basic usage
* preview needs to be used in together with preview-item.

```html
    <ui-preview btn="mainBtn" btnOther="othBtn" @on-click="onClick" @on-click-other="otherClick">
      <ui-preview-item label="label1">label1</ui-preview-item>
      <ui-preview-item label="label2">label2</ui-preview-item>
      <ui-preview-item label="longLabel">longlonglonglonglonglonglonglonglonglonglonglong</ui-preview-item>
    </ui-preview>
```
### Attribute 

| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|btn | Main button |Boolean, String |——|—— |
|btnOther | Other button |Boolean, String |——|—— |

### Slot

| Name      | Description    |
|---------- |-------- |
|—— | Custom content |

### API

| Name      | Attribute    | Description    |
|---------- |-------- |-------- |
|on-click | —— | Main button's click event |
|on-click-other |—— | Other button's click event |

### preview-item Basic usage

### Attribute

| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|label | label content |String |——|—— |

### Slot

| Name      | Description    |
|---------- |-------- |
|—— | Custom content |
## Badge 徽章

### 基础用法

```html
<ui-badge value="new"></ui-badge>
<ui-badge :value="99"></ui-badge>
```

### 最大值

```html
<ui-badge :value="120" :max="99"></ui-badge>
```

### 提示小红点

```html
<ui-badge is-dot></ui-badge>
<ui-badge :is-dot="true"></ui-badge>
```

### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|value |显示值 |string, number |——|—— |
|max |最大值，value为Number类型时，超过最大值则显示'{max+}'| number |——|—— |
|is-dot |显示小圆点| boolean |——|true |

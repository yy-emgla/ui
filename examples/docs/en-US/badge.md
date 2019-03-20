## Badge

### Basic usage

```html
<ui-badge value="new"></ui-badge>
<ui-badge :value="99"></ui-badge>
```

### Maximum value
```html
<ui-badge :value="120" :max="99"></ui-badge>
```

### Hint of red dot

```html
<ui-badge is-dot></ui-badge>
<ui-badge :is-dot="true"></ui-badge>
```

### Attribute

| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|value |text content |String, Number |——|—— |
|max |Maximum value, When value is Number,when the value exceeds the maximum value, shows '{max+}'.|Number |——|—— |
|is-dot |Display little dots.|Boolean |—— |true |

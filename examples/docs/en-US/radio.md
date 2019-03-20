## Radio

### Basic usage

```html
  <ui-radio :options="radio1" value="China" disabled></ui-radio>
        <ui-radio
          fill-mode
          :selected-label-style="{color: '#FF9900'}"
          :options="radio2"
          v-model="radio1Value"
          @on-change="change"></ui-radio>
<script>
  export default {
    data () {
      return {
        radio1: ['China', 'Japan'],
        radio2: [{
             icon: '//dummyimage.com/110',
             key: '001',
             value: 'radio001',
           }, {
             icon: '//dummyimage.com/110',
             key: '002',
             value: 'radio002',
           }],
        radio1Value: '001'
      }
    },
    methods: {
      change (value, label) {
        console.info(value, label)
      }
    }
  }
</script>
```
### Attribute

| Attribute      | Description    | Type      | Accepted Values	       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|options | the single select component option can be an array of [value...] Format, or [{key, value, icon}...]. |Array |————|———— |
|value | the value selected by the current single radio, binding with v-model |String, Number |————|———— |
|fillMode | filling module |Boolean |————|false |
|fillPlaceholder | the placeholder attribute of the fill module input |String |————|other |
|fillLabel | the label content of filling module |String |————|other |
|disabled | whether the radio is disabled |Boolean |————|———— |
|selectedLabelStyle | the selected style is written in line style style format |Object |————|———— |

### Slot

| Name      | Description    | Attribute (scope slot) |
|---------- |-------- |-------- |
|each-item | a display slot for each item of the candidate item |label(candidate label),icon(candidate icon),index(candidate index),selected(whether or not to be selected)|

### API

| Name      | Attribute    | Description    |
|---------- |-------- |-------- |
|on-change | newValue(current selected value), label(label after selected options) | the change event of the selected value |

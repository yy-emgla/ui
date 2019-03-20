## Input

### Basic usage
```html
   <ui-input title="label"
     placeholder="Please enter the relevant information">
   </ui-input>
   <ui-input title="Disable validation"
     placeholder="input"
     novalidate
     :icon-type="iconType"
     :show-clear="false"
     @on-blur="onBlur"
     placeholder-align="right">
   </ui-input>
  <script>
  export default {
    data () {
      return {
        iconType: ''
      }
    },
    methods: {
      onBlur() {}
    }
  }
  </script>
```
### attribute

| Attribute      | Description    | Type      | Accepted Values	       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|required | whether Input is required |Boolean |————|false |
|title | title text |String |————|———— |
|type | type of input |String |————|text |
|placeholder | placeholder of Input |String |————|text |
|value | binding value |String, Number |————|text |
|name | name of input |String |————|———— |
|readonly |  whether Input is readonly |Boolean |————|———— |
|disabled | whether Input is disabled |Boolean |————|———— |
|keyboard | keyboard |String |number|———— |
|inlineDesc | inline description |String |————|———— |
|isType | type rules for input content |String, Function |email,mobile,name,china-mobile(when the China-mobile is set, keyboard is set to Number)|———— |
|min | minimum length |Number|————|———— |
|max | maximum length |Number|————|———— |
|showClear | whether to display the clean button |Boolean|————|———— |
|equalWith | input consistent content |Boolean|————|———— |
|textAlign | input text location |Boolean|————|———— |
|autocomplete | autocomplete of input |String|————|off |
|autocapitalize | autocapitalize of input (initials automatic capitalization) |String|————|off |
|autocorrect | autocorrect of input (autoCorrect) |String|————|off |
|spellcheck | spellcheck of input (spelling check) |String|————|false |
|novalidate | prohibition of verification |Boolean|————|false |
|iconType | icon type |String|success,error|———— |
|placeholderAlign | the input placeholder content location |String|————|———— |
|labelWidth | label width, high priority |String|————|———— |
|shouldToastError | whether or not to display errors with Toast |Boolean|————|true |

### Slot

| Name      | Description    |
|---------- |-------- |
|restricted-label | label front slots |
|label | label slot, without the slot, display default title, inlineDesc and other attributes. |
|right | right slot of the input |


### API

| Name      | Attribute    | Description    |
|---------- |-------- |-------- |
|on-click-error-icon | (err) | error chart clicking event |
|on-focus | (currentVal，event) | input focus event |
|on-enter | (currentVal，event) | input return event |
|input | (currentVal) | input event |
|on-change | (currentVal) | changed events |

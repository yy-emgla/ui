## Checkbox

### Basic usage

```html
  <ui-checkbox title="max=1"
    :options="commonList"
    v-model="value"
    :max="1"
    @on-change="change">
  </ui-checkbox>
  <script>
  export {
    data () {
      return {
        commonList: ['China', 'Japan', 'America'],
        value: ['China']
      }
    },
    methods: {
      change (val) {
        //
      }
    }
  }
  </script>
```
### Attribute

| Attribute      | Description    | Type      | Accepted Values	       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|value | value of the checkbox if it's checked |Array |————|———— |
|required | whether the checkbox is required |Boolean |————|———— |
|title | title |String |————|———— |
|showError | whether the error is displayed |String |————|———— |
|options | optional：it can be a single content as an array element, or an object in {key:XX or value:XX} format as an element. |Array |————|———— |
|max | maximum number of checkbox checked |Number |————|———— |
|min | minimum number of checkbox checked |Number |————|———— |
|fillMode | filling mode |Boolean |————|———— |
|checkDisabled | whether the check is disabled |Boolean |————|true |
|labelPosition | the position of label |Boolean |————|———— |
|disabled | whether the Checkbox is disabled |Boolean |————|———— |

### Slot

| Name      | Description    |
|---------- |-------- |
|- | default display content |
|after-title | content slot behind title |
|footer | bottom slot of component |

### API

| Name      | Attribute    | Description    |
|---------- |-------- |-------- |
|on-change | val: currently selected data, label: page display content in current selected data | selected change |
|on-error | err: error message | Error function |
|on-clear-error | ———— | clean up error function |

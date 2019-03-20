## SelectInline

### Basic usage

```html
<ui-select-inline slot="value" v-model="value" :options="options" :max=2>
  <template slot-scope="scope">
    <p class="select-item"
       v-bind:class="{'item-checked': scope.item.checked}">{{scope.item.val}}</p>
  </template>
</ui-select-inline>
<script>
  export default {
    data () {
      return {
        value: [],
        options: ['China', 'Japan'],
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

| Attribute      | Attribute    | Type      | Accepted Values	       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|value | current selected values for selectInline |Array |————|———— |
|required | whether the selectInline is required |Boolean |————|———— |
|isText | whether the candidate item is text style |Boolean |————|———— |
|bText | component pre text content |String |————|———— |
|showError | whether or not to display a error |String |————|———— |
|options | optional: it can be a single content as an array element, or an object in {key:XX, value:XX} format as an element |Array |————|———— |
|max | maximum number of selected values |Number |————|———— |
|min | minimum number of selected values |Number |————|———— |
|checkDisabled | whether the selectInline is checkDisabled|Boolean |————|true |
|disabled | whether the selectInline is disabled |Boolean |————|———— |

### Slot

| Name      | Description    | Attribute (scope slot) |
|---------- |-------- |-------- |
|- | candidate entries for each display slot |{val: current preferences, index:current subscript subscript, checked: whether is selected)}|
|before | the component pre - slots the contents without displaying the BText attribute. |————|

### API

| Name      | Attribute    | Description    |
|---------- |-------- |-------- |
|on-change | val currently selects data, and label currently selects the contents of the page displayed in the selected data. | selected change |
|on-error | error message | error function |
|on-clear-error | ———— | scavenging error function |

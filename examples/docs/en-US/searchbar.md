## SearchBar

### Basic usage

```html
    <ui-search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
    </ui-search>
    <script>
    export default {
      data () {
        value: '',
        results: []
      },
      methods: {
        resultClick (item) {},
        onFocus () {},
        onCancel () {},
        onSubmit () {},
      }
    }
    </script>
```
### Attribute

| Attribute      | Description    | Type      | Accepted Values	       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|required |whether SearchBar is required |Boolean |————|false |
|placeholder |placeholder of input |String |————|———— |
|cancelText |cancelling the text |String |————|取消 |
|value |the contents of the input, bound with v-model |String |————|———— |
|results |display results |Array |————|———— |
|autoFixed |whether fix the top or not, note that if you set up autoScrollToTop, the elements will float up. |Boolean |————|true |
|top |when in the fixed state, the distance of the top |String |————|0px |
|position |what is the posi              tion when it is in the fixed state |String |————|fixed |
|autoScrollToTop |when you are in the fixed state, whether you automatically scroll to the top or not |Boolean |————|———— |

### Slot

| Name      | Description    |
|---------- |-------- |
|- | default display content |
|left| the slot on the left side of the input box |
|right|the slot on the right side of the input box |


### API

| Name      | Attribute    | Description    |
|---------- |-------- |-------- |
|on-change | ———— | search box content change event |
|on-submit | （value） | form submission event |
|on-cancel | ———— | click the Cancel button event |
|on-focus | ———— | input box focusing event |
|on-blur | ———— | loss of focus |
|on-result-click |（item）| search results click event |
|on-touch |————| label click event |

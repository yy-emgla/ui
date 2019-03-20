## Input 表单输入

### 基础用法
```html
   <ui-input title="label"
     placeholder="请输入相关信息">
   </ui-input>
   <ui-input title="禁用验证"
     placeholder="输入"
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

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|required | 是否必须 |Boolean |————|false |
|title | 输入框前文本 |String |————|———— |
|type | 输入框type类型 |String |————|text |
|placeholder | 输入框placeholder |String |————|text |
|value | 输入框值，用v-model绑定 |String, Number |————|text |
|name | 输入框name属性 |String |————|———— |
|readonly | 是否只读 |Boolean |————|———— |
|disabled | 是否禁用 |Boolean |————|———— |
|keyboard | 键盘 |String |number|———— |
|inlineDesc | 行内描述 |String |————|———— |
|isType | 输入内容type规则 |String, Function |email,mobile,name,china-mobile(设置该china-mobile时，keyboard设置成Number才起作用)，如果为function，需要返回{valid,msg}格式的对象|———— |
|min | 最短长度 |Number|————|———— |
|max | 最长长度 |Number|————|———— |
|showClear | 是否展示清除按钮 |Boolean|————|———— |
|equalWith | 输入一致内容 |Boolean|————|———— |
|textAlign | 输入框文本位置 |Boolean|————|———— |
|autocomplete | 输入框autocomplete属性 |String|————|off |
|autocapitalize | 输入框autocapitalize属性（首字母自动大写） |String|————|off |
|autocorrect | 输入框autocorrect属性（自动更正） |String|————|off |
|spellcheck | 输入框spellcheck属性（拼写校验） |String|————|false |
|novalidate | 禁止验证 |Boolean|————|false |
|iconType | icon类型 |String|success,error|———— |
|placeholderAlign | 输入框placeholder内容位置 |String|————|———— |
|labelWidth | label宽度代码，优先级高 |String|————|———— |
|shouldToastError | 是否用Toast展示错误 |Boolean|————|true |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|restricted-label | label前置插槽 |
|label | label插槽，没有该插槽是显示默认title，inlineDesc等属性内容 |
|right | 输入框右侧插槽 |


### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-click-error-icon | (err) | 错误图标点击事件 |
|on-focus | (currentVal，event) | 输入框获取焦点事件 |
|on-blur | (currentVal，event) | 输入框失去焦点事件 |
|on-enter | (currentVal，event) | 输入框回车事件 |
|input | (currentVal) | 输入框input事件 |
|on-change | (currentVal) | 改变后的事件 |

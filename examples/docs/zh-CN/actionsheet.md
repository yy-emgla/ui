## ActionSheet 弹出式菜单

### 基础用法

```html
<ui-cell title="基本使用">
  <ui-switch v-model="show1"></ui-switch>
</ui-cell>

<ui-actionsheet :show.sync="show1"
  :menus="menus1"
  @on-click-menu="click"></ui-actionsheet>

<script>
  export default {
    data() {
        return {
          show1: false,
          menus1: {
            menu1: 'Share to friends',
            menu2: 'Share to timeline',
          },
        };
    },
    methods: {
      click(key, value) {
        console.log(key, value);
      },
    },
  }
</script>
```
### 属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|show | 显示 |Boolean |———— |false |
|isAndroid | 是否为Android模式 |Boolean |———— |false |
|show-cancel | 是否显示取消按钮,对Android模式无效 |Boolean |———— |false |
|cancel-text | 取消菜单的显示文字 |String |———— |取消 |
|menus | 菜单列表,例如:{menu1: 'Share to friends'},如果名字上带有.noop表明这是纯文本(HTML)展示,不会触发事件,用于展示描述或者提醒. |Object/Array |———— |{} |
|close-on-clicking-mask | 点击遮罩时是否关闭菜单,适用于一些进入页面时需要强制选择的场景. |Boolean |———— |true |
|close-on-clicking-menu | 点击菜单时是否自动隐藏 |Boolean |———— |true |

### 事件

| 事件      | 参数    | 说明      |
|---------- |-------- |---------- |
|on-click-menu | (key, value)/(value, item) |点击菜单按钮时触发,若对应的menus(菜单列表)为Object,参数1为对象的key,参数2为对应的value;若对应的menus(菜单列表)Array,则参数1为菜单按钮的value,参数2为item(菜单对象);菜单按钮为cancel,参数有且仅有cancel |
|on-click-menu-{key} |———— |点击事件的快捷方式,key与label的值有关.举例:如果你有一个菜单名字为delete,那么你可以监听 on-click-menu-delete |
|on-click-mask |———— |点击遮罩时触发 |

## Tab 选项卡

* tab需要结合tab-item一起使用
### 基础用法
```html
      <ui-tab style="width:500px;" v-model=1 bar-active-color="#668599" :line-width="1">
        <ui-tab-item>select1</ui-tab-item>
        <ui-tab-item>select2</ui-tab-item>
        <ui-tab-item>select3</ui-tab-item>
        <ui-tab-item>select4</ui-tab-item>
        <ui-tab-item>select5</ui-tab-item>
      </ui-tab>
```
### attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|value | 当前选中 |Number |————|———— |
|lineWidth | 选中tab下方bar的宽度，当animate设置false时起作用 |Number |————|3 |
|activeColor | 选中tab颜色代码 |String |————|———— |
|barActiveColor | customBar颜色代码，优先级比activeColor高|String |————|———— |
|defaultColor | 默认颜色代码|String |————|———— |
|disabledColor | 禁用颜色代码|String |————|———— |
|animate | 切换是否动画|Boolean |————|true |
|customBarWidth | bar宽度|Function, String |————|———— |
|preventDefault | 是否阻止冒泡到on-before-index-change事件|Function, String |————|———— |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-before-index-change | ———— | index改变前置事件 |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

## tab-item

### attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|selected | 是否被选中 |Boolean |————|———— |
|activeClass | 选中候选项的className |String |————|———— |
|disabled | 是否禁用 |Boolean |————|———— |
|badgeBackground | 候选项badge背景颜色 |String |————|#f74c31 |
|badgeColor | 候选项badge颜色 |String |————|#fff |
|badgeLabel | 候选项badge内容 |String |————|———— |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-item-click | ———— | 点击事件 |


### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

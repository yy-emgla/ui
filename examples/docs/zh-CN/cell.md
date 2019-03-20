## Cell 单行

### cell基础用法
* cell组件放入group组件（list）中一起使用，才会获取group组件（list）提供的label样式以及cell间距等样式功能
```html
 <ui-group>
   <ui-cell title="Money"></ui-cell>
   <ui-cell title="flex-start"
     align-items="flex-start"
     value="一大段内容一大段内容一大段内容一大段内容一大段内容一大段内容一大段内容一大段内容">
   </ui-cell>
   <ui-cell title="General" is-link>
     <img slot="icon" width="20" src="iconUrl">
   </ui-cell>
   <ui-cell :border-intent="false" title="testTitle" is-link class="testClass"></ui-cell>
 </ui-group>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|title | 标题（label） |String, Number |————|———— |
|value | 内容 |String, Number, Array |————|———— |
|isLink | 是否链接 |Boolean |————|———— |
|isLoading | 是否加载中 |Boolean |————|———— |
|inlineDesc | 行内描述内容 |Boolean |————|———— |
|primary | 主要内容，可设置是title或者后面的内容 |String |title，content|title |
|link | 链接跳转的地址，object类型下为router对象 |String, Object |————|———— |
|valueAlign | 内容显示位置,当设置成left时，primary设置title无效果，设置content才有效果 |String |left|———— |
|borderIntent | 是否定位最左 |Boolean |————|true |
|disabled | 是否禁用 |Boolean |————|———— |
|arrowDirection | 箭头指向 |String |up, down|true |
|alignItems | cell单行的alignItems样式 |String |flex-start, flex-end, center, baseline, stretch|———— |


### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容，如若没有显示value属性 |
|icon | title（label）前图标） |
|title | title插槽，如若没有显示title属性 |
|after-title | title后置插槽，显示在title后或者title插槽后 |
|inline-desc | inline-desc插槽，如若没有显示inlineDesc属性 |
|value | value插槽，作用同默认插槽 |
|child | child插槽，位于单行下方 |

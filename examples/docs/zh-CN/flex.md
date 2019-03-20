## Flex 布局

### 基础用法

```html
 <ui-flex justify="space-between" :gutter="10">
     <ui-flex-item><span>flexbox</span></ui-flex-item>
     <ui-flex-item><span>flexbox</span></ui-flex-item>
     <ui-flex-item><span>flexbox</span></ui-flex-item>
 </ui-flex>
 <ui-flex align="stretch" :gutter="10">
     <div>box</div>
     <ui-flex-item><span>flexbox</span></ui-flex-item>
     <div>box</div>
 </ui-flex>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|gutter |内部子元素的间距，如果主轴是横向，左右间距，如果竖向就是上下间距 |Number |————|0 |
|orient |主轴方向 |String |vertical（竖）,horizontal（横）|horizontal |
|justify |主轴方向对齐方式 |String| flex-start, flex-end, center, space-between, space-around|flex-start |
|align |交叉轴方向对齐方式 |String| flex-start, flex-end, center,  baseline, stretch|stretch（没有设置高度的情况下默认撑满） |
|wrap |换行方式 |String |nowrap, wrap, wrap-reverse|nowrap |
|direction |主轴的方向 |String|row, row-reverse, column, column-reverse|row |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

## ui-flex-item
### ui-flex-item 的基础用法（当且仅当ui-flex组件中使用）

### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|span |主轴所占比 |String,Number |————|———— |
|order |排序 |String,Number| ————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

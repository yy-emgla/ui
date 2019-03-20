## Grid 九宫格

### 基础用法

```html
<template>
  <ui-grid :cols="3" :rows="3" :gridRows="gridRows" :gridCols="gridCols">
    <ui-grid-item label="Grid" v-for="i in 10" :key="i">
      <img slot="icon" src="//dummyimage.com/50">
    </ui-grid-item>
  </ui-grid>
</template>
<script>
export default {
  data() {
    return {
      gridRows: '1fr 2fr 1fr',
      gridCols: '1fr 1fr 2fr',
    };
  },
};
</script>
```

### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|cols | 列数，如果为空为grid-item组件个数 |Number |————|3 |
|rows | 行数，如果为空为grid-item个数除以列数取整 |Number |————|———— |
|gridRows | 行的分布情况 |String |————|———— |
|gridCols | 列的分布情况 |String |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

## ui-grid-item
### ui-grid-item 的基础用法（当且仅当ui-grid组件中使用）


### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|icon |icon图片 |String |————|———— |
|label |label内容 |String（html）| ————|———— |
|link |item点击事件链接 |String| ————|———— |
|rowStart |设置起始行 |Number| ————|———— |
|rowEnd |设置结束行 |Number| ————|———— |
|columnStart |设置起始列 |Number| ————|———— |
|columnEnd |设置结束列 |Number| ————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |
|icon | icon插槽，当该插槽存在时，icon属性无效 |
|label | label插槽，当该插槽存在时，label属性无效 |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-item-click | ———— | item的点击事件 |

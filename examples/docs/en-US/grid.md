## Grid

### Basic usage

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

| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|cols | column number, if it's empty, is the number of grid-item components.|Number |——|3 |
|rows | row number, if it's empty, is the number of grid-item components divided by the number of column.|Number|——|—— |
|gridRows | The distribution of rows. |String |——|—— |
|gridCols | The distribution of columns. |String |——|—— |

### Slot

| Name      | Description    |
|---------- |-------- |
|—— | Custom Content |

## ui-grid-item

### ui-grid-item basic usage (Only used in ui-grid)

```html
<ui-grid>
  <ui-grid-item>grid1</ui-grid-item>
  <ui-grid-item>grid2</ui-grid-item>
  <ui-grid-item>grid3</ui-grid-item>
</ui-grid>
```

### Attribute

| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|icon |icon images |String |——|—— |
|label |label content |String（html）| ——|—— |
|link | item's click event link |String| ——|—— |
|rowStart |set the starting row |Number| ——|—— |
|rowEnd |set the ending row |Number| ——|—— |
|columnStart |set the starting column |Number| ——|—— |
|columnEnd |set the ending column |Number| ——|—— |

### Slot

| Name      | Description    |
|---------- |-------- |
|—— | Custom Content |
|icon | icon slot, when the slot exists, the icon attribute is invalid.|
|label | label slot, when the slot exist, the label attribute is invalid.|

### API

| Name      | Attribute    | Description    |
|---------- |-------- |-------- |
|on-item-click | —— | item's click event |

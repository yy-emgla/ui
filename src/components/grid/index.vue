<template>
  <div class="weui-grids" :style="gridsStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'UiGrid',
  methods: {
    countColumn() {
      this.childrenSize = this.$children.length;
    },
    makeTemCode(total) {
      let tem = '';
      for (let v = 0; v < total; v += 1) {
        tem += '1fr ';
      }
      return tem;
    },
  },
  props: {
    cols: {
      type: Number,
    },
    rows: {
      type: Number,
    },
    gridRows: String,
    gridCols: String,
  },
  computed: {
    column() {
      return this.cols || this.childrenSize;
    },
    row() {
      return this.rows || Math.floor(this.childrenSize / this.column);
    },
    gridsStyle() {
      let temRows = '';
      let temCols = '';
      temRows = this.gridRows ? this.gridRows : this.makeTemCode(this.row);
      temCols = this.gridCols ? this.gridCols : this.makeTemCode(this.column);
      return {
        display: 'grid',
        'grid-template-rows': temRows,
        'grid-template-columns': temCols,
      };
    },
  },
  data() {
    return {
      childrenSize: 3,
    };
  },
};
</script>

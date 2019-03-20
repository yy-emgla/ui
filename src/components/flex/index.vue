<template>
  <div class="weui-flex" :class="{
    'ui-flex-col': orient === 'vertical',
    'ui-flex-row': orient === 'horizontal'
  }" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'UiFlex',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    orient: {
      type: String,
      default: 'horizontal',
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String,
  },
  computed: {
    styles() {
      return {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction,
      };
    },
  },
};
</script>

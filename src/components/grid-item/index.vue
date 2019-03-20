<template>
  <a href="javascript:;" class="weui-grid" @click="onClick" :style="style">
    <div class="weui-grid__icon" v-if="hasIconSlot || icon">
      <slot name="icon"><img :src="icon" alt=""></slot>
    </div>
    <p v-if="hasLabelSlot || label" class="weui-grid__label">
      <slot name="label">
        <span v-html="label"></span>
      </slot>
    </p>
    <slot></slot>
  </a>
</template>
<script>
import { go } from '../../utils/router';

export default {
  name: 'UiGridItem',
  // props: ['icon', 'label', 'link', 'rowStart', 'rowEnd', 'columnStart', 'columnEnd'],
  props: {
    icon: '',
    label: '',
    link: '',
    rowStart: Number,
    rowEnd: Number,
    columnStart: Number,
    columnEnd: Number,
  },
  created() {
    this.$parent.countColumn();
  },
  mounted() {
    this.$slots.icon && (this.hasIconSlot = true);
    this.$slots.label && (this.hasLabelSlot = true);
  },
  destroyed() {
    // this.$parent.countColumn();
  },
  computed: {
    style() {
      // const column = this.$parent.column;
      // if (!column || column === 3) {
      //   return {};
      // }
      return {
        // width: `${100 / column}%`,
        width: 'auto',
        'grid-row-start': this.rowStart || '',
        'grid-row-end': this.rowEnd || '',
        'grid-column-start': this.columnStart || '',
        'grid-column-end': this.columnEnd || '',
      };
    },
  },
  methods: {
    onClick() {
      this.$emit('on-item-click');
      go(this.link, this.$router);
    },
  },
  data() {
    return {
      hasIconSlot: false,
      hasLabelSlot: false,
    };
  },
};
</script>

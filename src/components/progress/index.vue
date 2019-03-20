<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar" :style="{width: percent + '%'}"></div>
    </div>
    <a href="javascript:;" class="weui-progress_opr" v-show="showCancel">
      <i class="weui-icon-cancel" @click="cancel"></i>
    </a>
  </div>
</template>
<script>
import Base from '../../mixins/base';

export default {
  name: 'UiProgress',
  mixins: [Base],
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    cancel() {
      this.$emit('on-cancel');
    },
  },
};
</script>

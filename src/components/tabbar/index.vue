<template>
  <nav class="weui-tabbar">
    <slot></slot>
  </nav>
</template>
<script>
import { parentMixin } from '../../mixins/multi-items';

export default {
  name: 'UiTabbar',
  mixins: [parentMixin],
  props: {
    iconClass: String,
  },
  mounted() {
    if (process.env.NODE_ENV === 'development') {
      this.$nextTick(() => {
        const $el = this.$el;
        const position = window.getComputedStyle($el).position;
        if (position === 'fixed') {
          return;
        }
        if (position === 'absolute') {
          if (document.documentElement.offsetHeight !== window.innerHeight) {
            console.warn('[warn] tabbar 定位默认为 absolute，如果你没有使用 100% 布局(container)，需要手动设置 style position 为 fixed');
          }
        }
      });
    }
  },
};
</script>

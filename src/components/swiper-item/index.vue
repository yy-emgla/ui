<template>
  <div class="ui-swiper-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'UiSwiperItem',
  mounted() {
    this.$nextTick(() => {
      this.$parent.rerender();
    });
  },
  beforeDestroy() {
    const $parent = this.$parent;
    this.$nextTick(() => {
      $parent.rerender();
    });
  },
};
</script>

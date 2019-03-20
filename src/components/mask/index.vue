<template>
  <transition name="ui-fade">
    <div :class="opacity ? 'weui-mask_transparent' : 'weui-mask'"
      v-if="show"
      @click="onClick"></div>
  </transition>
</template>
<script>
export default {
  name: 'UiMask',
  props: {
    show: Boolean,
    opacity: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

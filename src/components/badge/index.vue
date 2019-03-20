<template>
  <span class="weui-badge"
    :class="{'weui-badge_dot': isDot === true}"
    v-text="text" >
  </span>
</template>
<script>
export default {
  name: 'UiBadge',
  props: {
    value: {
      type: [String, Number],
    },
    isDot: Boolean,
    max: Number,
  },
  computed: {
    text() {
      const max = this.max;
      const value = this.value;
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }
      return value;
    },
  },
};
</script>

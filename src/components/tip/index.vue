<template>
  <div class="ui-group-tip" :style="{'text-align':align}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'UiTip',
  props: {
    align: {
      type: String,
      default: 'left',
    },
  },
};
</script>

<template>
  <i :class="classname"></i>
</template>
<script>
export default {
  name: 'UiIcon',
  props: {
    type: {
      type: String,
      default: 'success',
    },
    msg: [Boolean, String],
  },
  computed: {
    classname() {
      let cls = this.msg.length > 1
        ? `weui-icon_msg-${this.msg}`
        : 'weui-icon_msg';
      cls = this.msg ? cls : '';
      return [
        cls,
        this.type && `weui-icon-${this.type}`,
      ];
    },
  },
};
</script>

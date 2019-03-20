<template>
  <button class="weui-btn"
    :style="buttonStyle"
    :class="classes"
    :type="actionType"
    :disabled="disabled"
    @click="onClick">
    <i class="weui-loading" v-if="loading"></i>
    <slot>{{ text }}</slot>
  </button>
</template>
<script>
export default {
  name: 'UiButton',
  props: {
    type: {
      default: 'default',
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: {
      type: String,
      default: 'button',
    },
    loading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: val => val.length === 2,
    },
  },
  methods: {
    onClick(e) {
      !this.disabled && this.$emit('click', e);
    },
  },
  computed: {
    noBorder() {
      return Array.isArray(this.gradients);
    },
    buttonStyle() {
      if (this.gradients) {
        return {
          background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.gradients[1]})`,
          color: '#FFFFFF',
        };
      }
      return false;
    },
    classes() {
      return [
        {
          'weui-btn_disabled': !this.plain && this.disabled,
          'weui-btn_plain-disabled': this.plain && this.disabled,
          'weui-btn_mini': this.mini,
          'ui-button-no-border': this.noBorder,
        },
        !this.plain ? `weui-btn_${this.type}` : '',
        this.plain ? `weui-btn_plain-${this.type}` : '',
        this.loading ? 'weui-btn_loading' : '',
      ];
    },
  },
};
</script>

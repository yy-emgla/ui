<template>
  <div class="ui-toast" :class="type === 'loading' && 'weui-loading_toast'">
    <ui-mask :show="show" :opacity="!mask"></ui-mask>
    <transition :name="currentTransition">
      <div class="weui-toast"
        :style="{width: type==='text' ? 'auto' : width}"
        :class="toastClass"
        v-show="show">
        <i class="weui-icon_toast"
          :class="type === 'loading' ? 'weui-loading' : 'weui-icon-success-no-circle'"
          v-show="type !== 'text'"></i>
        <p class="weui-toast__content" :style="style">
          {{text}}
          <slot></slot>
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
import UiMask from '../mask';

export default {
  name: 'UiToast',
  components: {
    UiMask,
  },
  props: {
    show: Boolean,
    mask: Boolean,
    time: {
      type: Number,
      default: 2000,
    },
    type: {
      type: String,
      default: 'success',
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em',
    },
    text: String,
    position: String,
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'ui-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'ui-slide-from-bottom';
      }
      return 'ui-fade';
    },
    toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'ui-toast-top': this.position === 'top',
        'ui-toast-bottom': this.position === 'bottom',
        'ui-toast-middle': this.position === 'middle',
      };
    },
    style() {
      return this.type === 'text' && { padding: '10px' };
    },
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit('on-show');
        clearTimeout(this.timeout);
        if (this.time > 0) {
          this.timeout = setTimeout(() => {
            if (this.$parent) {
              this.$emit('update:show', false);
            } else {
              this.show = false;
            }
            this.$emit('on-hide');
          }, this.time);
        }
      }
    },
  },
};
</script>

<template>
  <div class="ui-dialog">
    <ui-mask :show.sync="show" @click="clickMask"></ui-mask>
    <transition name="ui-popup">
      <div class="weui-dialog" :class="isAndroid && 'weui-skin_android'" v-show="show"
      :style="style">
        <div class="weui-dialog__hd" v-if="title">
          <strong class="weui-dialog__title">{{title}}</strong>
        </div>
        <div class="weui-dialog__bd">
          <slot></slot>
        </div>
        <div class="weui-dialog__ft">
          <a class="weui-dialog__btn weui-dialog__btn_default"
            v-if="!alert"
            @click.prevent="cancel">
            {{cancelText}}
          </a>
          <a class="weui-dialog__btn weui-dialog__btn_primary" @click.prevent="onClick">
            {{confirmText}}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import UiMask from '../mask';
import locale from '../../mixins/locale';

export default {
  name: 'UiDialog',
  mixins: [locale],
  components: {
    UiMask,
  },
  methods: {
    clickMask() {
      if (this.autoCloseMask) {
        this.$emit('update:show', false);
      }
    },
    onClick() {
      this.$emit('update:show', false);
      this.$emit('on-click');
    },
    cancel() {
      this.$emit('update:show', false);
      this.$emit('on-cancel');
    },
  },
  props: {
    show: Boolean,
    alert: Boolean,
    isAndroid: Boolean,
    title: [Boolean, String],
    top: {
      type: String,
      default: '50%',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    confirmText: {
      type: String,
      default: '确认',
    },
    autoCloseMask: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    style() {
      return { top: this.top };
    },
  },
};
</script>

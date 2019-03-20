<template>
  <div class="ui-picker">
    <ui-mask v-if="showMask" :show.sync="currentValue" @click="clickMask"></ui-mask>
    <transition name="ui-slide">
      <div class="weui-picker" ref="pop" :style="{height: popupHeight}"
           :class="{'ui-popup__toggle': currentValue}">
        <div class="weui-picker__hd" ref="header" v-show="header">
          <slot name="header">
            <a class="weui-picker__action" @click="cancel">{{cancelText || t('cancel')}}</a>
            <span :class="[headerTextClass]" v-if="headerText">{{headerText}}</span>
            <a class="weui-picker__action" @click="confirm">{{confirmText || t('confirm')}}</a>
          </slot>
        </div>
        <div class="weui-popup__bd" :style="{height: popupBodyHeight}">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import uiMask from '../mask';
import locale from '../../mixins/locale';

export default {
  name: 'UiPopup',
  mixins: [locale],
  components: {
    uiMask,
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.setHeight(this.height);
    });
  },
  props: {
    header: false,
    value: Boolean,
    headerText: '',
    headerTextClass: {
      type: String,
      default: 'ui-popup-header-text',
    },
    height: String,
    showMask: {
      type: Boolean,
      default: true,
    },
    closeByMask: {
      type: Boolean,
      default: true,
    },
    cancelText: String,
    confirmText: String,
  },
  methods: {
    clickMask() {
      this.closeByMask && (this.currentValue = !this.currentValue);
    },
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      this.$emit('confirm');
    },
    setHeight(height) {
      this.popupHeight = height;
      this.$nextTick(() => {
        const popHeight = this.$refs.pop.offsetHeight;
        this.popupBodyHeight = this.header ? `calc(${popHeight}px
      - ${this.$refs.header.offsetHeight}px)` : (`${popHeight}px`);
      });
    },
  },
  data() {
    return {
      currentValue: this.value,
      popupHeight: '238px',
      popupBodyHeight: '238px',
    };
  },
  computed: {
  },
  watch: {
    value(val) {
      if (JSON.stringify(val) !== JSON.stringify(this.currentValue)) {
        this.currentValue = val;
      }
    },
    currentValue(val, oldV) {
      val !== oldV && this.$emit('input', val);
      this.$emit(val ? 'onShow' : 'onHide');
      this.$emit('onChange', val, oldV);
    },
    height(val) {
      this.setHeight(val);
    },
    header() {
      this.setHeight(this.height);
    },
  },
};
</script>

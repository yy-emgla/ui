<template>
  <div class="weui-cell" :class="{
      'ui-tap-active': isLink || !!link,
      'weui-cell_access': isLink || !!link,
      'ui-cell-no-border-intent': !borderIntent,
      'ui-cell-disabled': disabled
    }" :style="style" @click="onClick">
    <div class="weui-cell__hd">
      <slot name="icon"></slot>
    </div>
    <div class="ui-cell-bd"
      :class="{'ui-cell-primary': primary === 'title' && valueAlign !== 'left'}">
      <p>
        <label class="ui-label"
          :style="labelStyles"
          :class="labelClass"
          v-if="title || hasTitleSlot">
          <slot name="title">{{ title }}</slot>
        </label>
        <slot name="after-title"></slot>
      </p>
      <span class="ui-cell-desc">
        <slot name="inline-desc">{{ inlineDesc }}</slot>
      </span>
    </div>
    <div class="weui-cell__ft" :class="valueClass">
      <slot name="value"></slot>
      <slot>{{ value }}</slot>
      <i class="weui-loading" v-if="isLoading"></i>
    </div>
    <slot name="child"></slot>
  </div>
</template>
<script>
import { go } from '../../utils/router';

export default {
  name: 'UiCell',
  props: {
    title: [String, Number],
    value: [String, Number, Array],
    isLink: Boolean,
    isLoading: Boolean,
    inlineDesc: [String, Number],
    primary: {
      type: String,
      default: 'title',
    },
    link: [String, Object],
    valueAlign: [String],
    borderIntent: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    arrowDirection: String, // down or up
    alignItems: String,
  },
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
  },
  computed: {
    labelStyles() {
      if (!this.$parent) {
        return '';
      }
      return {
        width: this.$parent.labelWidth
          ? this.$parent.labelWidth
          : this.$parent.$parent.labelWidth,
        textAlign: this.$parent.labelAlign
          ? this.$parent.labelAlign
          : this.$parent.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
          ? this.$parent.labelMarginRight
          : this.$parent.$parent.labelMarginRight,
      };
    },
    valueClass() {
      return {
        'ui-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'ui-cell-align-left': this.valueAlign === 'left',
        'ui-cell-arrow-transition': !!this.arrowDirection,
        'ui-cell-arrow-up': this.arrowDirection === 'up',
        'ui-cell-arrow-down': this.arrowDirection === 'down',
      };
    },
    labelClass() {
      if (!this.$parent) {
        return '';
      }
      return {
        'ui-cell-justify': (
          this.$parent.justify
            ? this.$parent.justify
            : this.$parent.$parent.justify
        ) === 'justify',
      };
    },
    style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems,
        };
      }
      return {};
    },
  },
  methods: {
    onClick() {
      /* istanbul ignore next */
      !this.disabled && go(this.link, this.$router);
    },
  },
  data() {
    return {
      hasTitleSlot: true,
      hasMounted: false,
    };
  },
};
</script>

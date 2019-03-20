<template>
  <div class="weui-cells_radio" :class="disabled ? 'ui-radio-disabled' : ''">
    <label class="weui-cell weui-cell_radio weui-check__label"
    :for="`radio_${uuid}_${index}`"
    v-for="(one, index) in options"
    :key="index">
      <div class="weui-cell__bd">
        <slot name="each-item"
          :icon="one.icon"
          :label="getValue(one)"
          :index="index"
          :selected="currentValue === getKey(one)">
          <p>
            <img class="ui-radio-icon" :src="one.icon" v-show="one && one.icon">
            <span class="ui-radio-label"
              :style="currentValue === getKey(one)
                ? (selectedLabelStyle || '') : ''">{{ one | getValue }}</span>
          </p>
        </slot>
      </div>
      <div class="weui-cell__ft">
        <input type="radio"
          class="weui-check"
          v-model="currentValue"
          :id="disabled ? '' : `radio_${uuid}_${index}`"
          :value="getKey(one)">
        <span class="weui-icon-checked"></span>
      </div>
    </label>
    <div class="weui-cell" v-show="fillMode">
      <div class="weui-cell__hd">
        <label for="" class="weui-label">{{ fillLabel }}</label>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input needsclick"
          type="text"
          v-model="fillValue"
          :placeholder="fillPlaceholder"
          @blur="isFocus=false"
          @focus="onFocus()">
      </div>
      <div class="weui-cell__ft" v-show="value==='' && !isFocus">
        <i class="weui-icon-warn"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Base from '../../mixins/base';
import { getValue, getKey, getLabel } from '../checkbox/object-filter';

function contains(a, obj) {
  let i = a.length;
  while (i) {
    i -= 1;
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

export default {
  name: 'UiRadio',
  mixins: [Base],
  filters: {
    getValue,
    getKey,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: [String, Number],
    fillMode: {
      type: Boolean,
      default: false,
    },
    fillPlaceholder: {
      type: String,
      default: '其他',
    },
    fillLabel: {
      type: String,
      default: '其他',
    },
    disabled: Boolean,
    selectedLabelStyle: Object,
  },
  created() {
    this.handleChangeEvent = true;
  },
  methods: {
    getValue,
    getKey,
    onFocus() {
      this.currentValue = this.fillValue || '';
      this.isFocus = true;
    },
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(newVal) {
      const isOption = contains(this.options, newVal);
      if (newVal !== '' && isOption) {
        this.fillValue = '';
      }
      this.$emit('on-change', newVal, getLabel(this.options, newVal));
      this.$emit('input', newVal);
    },
    fillValue(newVal) {
      if (this.fillMode && this.isFocus) {
        this.currentValue = newVal;
      }
    },
  },
  data() {
    return {
      fillValue: '',
      isFocus: false,
      currentValue: this.value,
    };
  },
};
</script>

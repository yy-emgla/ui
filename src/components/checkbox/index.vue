<template>
  <div :class="disabled ? 'ui-checkbox-disabled' : ''">
    <div v-show="title" class="weui-cells__title">{{ title }}</div>
    <slot name="after-title"></slot>
    <div class="weui-cells weui-cells_checkbox">
      <label class="weui-cell weui-check_label"
        :class="{'ui-checkbox-label-left': labelPosition === 'left'}"
        :for="`checkbox_${uuid}_${index}`"
        v-for="(one, index) in currentOptions"
        :key="index">
        <div class="weui-cell__hd">
          <input type="checkbox"
            class="weui-check"
            :name="`ui-checkbox-${uuid}`"
            :value="getKey(one)"
            v-model="currentValue"
            :id="disabled ? '' : `checkbox_${uuid}_${index}`"
            :disabled="isDisabled(getKey(one))">
          <i class="weui-icon-checked ui-checkbox-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p v-html="getValue(one)"></p>
          <span class="ui-checkbox-desc" v-if="getInlineDesc(one)">{{getInlineDesc(one)}}</span>
        </div>
      </label>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
import Base from '../../mixins/base';
import Tip from '../tip';
import Icon from '../icon';
import {
  getValue,
  getLabels,
  getKey,
  getInlineDesc,
} from './object-filter';

function pure(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default {
  name: 'UiCheckbox',
  components: {
    Tip,
    Icon,
  },
  filters: {
    getValue,
    getKey,
  },
  mixins: [Base],
  props: {
    name: String,
    showError: Boolean,
    title: String,
    required: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      default: () => [],
    },
    max: Number,
    min: Number,
    fillMode: Boolean,
    checkDisabled: {
      type: Boolean,
      default: true,
    },
    labelPosition: {
      type: String,
      default: 'right',
    },
    disabled: Boolean,
  },
  data() {
    return {
      currentValue: [],
      currentOptions: this.options,
      tempValue: '', // used only for radio mode
    };
  },
  beforeUpdate() {
    if (this.isRadio) {
      const length = this.currentValue.length;
      if (length > 1) {
        this.currentValue = [this.currentValue[length - 1]];
      }
      const val = pure(this.currentValue);
      this.tempValue = val.length ? val[0] : '';
    }
  },
  created() {
    this.handleChangeEvent = true;
    if (this.value) {
      this.currentValue = this.value;
      if (this.isRadio) {
        this.tempValue = this.isRadio ? this.value[0] : this.value;
      }
    }
    this.currentOptions = this.options;
  },
  methods: {
    getValue,
    getKey,
    getInlineDesc,
    getFullValue() {
      const labels = getLabels(this.options, this.value);
      return this.currentValue.map((one, index) => ({
        value: one,
        label: labels[index],
      }));
    },
    isDisabled(key) {
      if (!this.checkDisabled) {
        return false;
      }
      if (this.cMax > 1) {
        return this.currentValue.indexOf(key) === -1 && this.currentValue.length === this.cMax;
      }
      return false;
    },
  },
  computed: {
    isRadio() {
      if (typeof this.max === 'undefined') {
        return false;
      }
      return this.max === 1;
    },
    cTotal() {
      return this.fillMode ? (this.options.length + 1) : this.options.length;
    },
    cMin() {
      if (!this.required && !this.min) {
        return 0;
      }
      if (!this.required && this.min) {
        return Math.min(this.cTotal, this.min);
      }
      if (this.required) {
        if (this.min) {
          const max = Math.max(1, this.min);
          return Math.min(this.cTotal, max);
        }
      }
      return 1;
    },
    cMax() {
      if (!this.required && !this.max) {
        return this.cTotal;
      }
      if (this.max) {
        if (this.max > this.cTotal) {
          return this.cTotal;
        }
        return this.max;
      }
      return this.cTotal;
    },
    valid() {
      return this.currentValue.length >= this.cMin && this.currentValue.length <= this.cMax;
    },
  },
  watch: {
    tempValue(val) {
      const value = val ? [val] : [];
      this.$emit('input', value);
      this.$emit('on-change', value, getLabels(this.options, value));
    },
    value(newVal) {
      if (JSON.stringify(newVal) !== JSON.stringify(this.currentValue)) {
        this.currentValue = newVal;
      }
    },
    options(val) {
      this.currentOptions = val;
    },
    currentValue(newVal) {
      const val = pure(newVal);

      if (!this.isRadio) {
        this.$emit('input', val);
        this.$emit('on-change', val, getLabels(this.options, val));
        let err = {};
        if (this.cMin) {
          if (this.required) {
            if (this.currentValue.length < this.cMin) {
              err = {
                min: this.cMin,
              };
            }
          } else if (this.currentValue.length && this.currentValue.length < this.cMin) {
            err = {
              min: this.cMin,
            };
          }
        }
        if (!this.valid && this.dirty && Object.keys(err).length) {
          this.$emit('on-error', err);
        } else {
          this.$emit('on-clear-error');
        }
      }
    },
  },
};
</script>

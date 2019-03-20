<template>
  <div class="ui-input weui-cell" :class="{'weui-cell_warn': showWarn, 'disabled': disabled}">
    <div class="weui-cell__hd">
      <div :style="labelStyles" v-if="hasRestrictedLabel">
        <slot name="restricted-label"></slot>
      </div>
      <slot name="label">
        <label class="weui-label"
          :class="labelClass"
          :style="{
            width: labelWidth || $parent.labelWidth || labelWidthComputed,
            textAlign: $parent.labelAlign,
            marginRight: $parent.labelMarginRight
          }"
          v-if="title"
          v-html="title"
          :for="`ui-input-${uuid}`"></label>
        <span class="input-desc" v-if="inlineDesc">{{inlineDesc}}</span>
      </slot>
    </div>
    <div class="weui-cell__bd weui-cell__primary"
      :class="placeholderAlign ? `ui-input-placeholder-${placeholderAlign}` : ''">
      <input :id="`ui-input-${uuid}`"
        v-if="!type || type === 'text' || type === 'number' || type === 'tel' ||type==='password'"
        class="weui-input"
        :maxlength="max"
        :autocomplete="autocomplete"
        :autocapitalize="autocapitalize"
        :autocorrect="autocorrect"
        :spellcheck="spellcheck"
        :style="inputStyle"
        :type="type"
        :name="name"
        :pattern="pattern"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        v-model="currentValue"
        @focus="focusHandler"
        @blur="onBlur"
        @keyup="onKeyUp"
        ref="input" />
    </div>
    <div class="weui-cell__ft">
      <icon type="clear"
        v-show="!equalWith && showClear && currentValue && !readonly && !disabled"
        @click.native="clear"></icon>
      <icon @click.native="onClickErrorIcon"
        class="ui-input-icon"
        type="warn"
        :title="!valid ? firstError : ''"
        v-show="showWarn"></icon>
      <icon @click.native="onClickErrorIcon"
        class="ui-input-icon"
        type="warn"
        v-if="!novalidate && hasLengthEqual && dirty && equalWith && !valid"></icon>
      <icon type="success"
        v-show="!novalidate && equalWith && equalWith === currentValue && valid"></icon>
      <icon type="success"
        class="ui-input-icon"
        v-show="novalidate && iconType === 'success'"></icon>
      <icon type="warn" class="ui-input-icon" v-show="novalidate && iconType === 'error'"></icon>
      <slot name="right"></slot>
    </div>
    <toast v-model="showErrorToast" type="text" width="auto" :time="600">{{ firstError }}</toast>
  </div>
</template>
<script>
import mixins from '../../mixins/base';
import Icon from '../icon';
import Toast from '../toast';

const validators = {
  email: {
    fn(str) {
      return str.match(/\w+@\w+\.\w+/);
    },
    msg: '邮箱格式',
  },
  mobile: {
    fn(str) {
      return str.match(/^1[3456789]\d{9}$/);
    },
    msg: '手机号码',
  },
  name: {
    fn(str) {
      return str.length >= 2 && str.length <= 6;
    },
    msg: '中文姓名',
  },
};

export default {
  name: 'UiInput',
  created() {
    this.currentValue = (this.value === undefined || this.value === null) ? '' : this.value;

    if (this.required && typeof this.currentValue === 'undefined') {
      this.valid = false;
    }
    this.handleChangeEvent = true;
  },
  beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
  },
  mixins: [mixins],
  components: {
    Icon,
    Toast,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true,
    },
    equalWith: String,
    textAlign: String,
    autocomplete: {
      type: String,
      default: 'off',
    },
    autocapitalize: {
      type: String,
      default: 'off',
    },
    autocorrect: {
      type: String,
      default: 'off',
    },
    spellcheck: {
      type: String,
      default: 'false',
    },
    novalidate: {
      type: Boolean,
      default: false,
    },
    iconType: String,
    placeholderAlign: String,
    labelWidth: String,
    shouldToastError: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight,
      };
    },
    labelClass() {
      return {
        'ui-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify',
      };
    },
    pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
      return false;
    },
    labelWidthComputed() {
      const width = (this.title.replace(/[^x00-xff]/g, '00').length / 2) + 1;
      if (width < 10) {
        return `${width}em`;
      }
      return false;
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
    inputStyle() {
      return {
        textAlign: this.textAlign,
      };
    },
    showWarn() {
      return !this.novalidate
        && !this.equalWith
        && !this.valid
        && this.firstError
        && (this.touched || this.forceShowError);
    },
  },
  methods: {
    onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    reset(value = '') {
      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear() {
      this.currentValue = '';
      this.focus();
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    focusHandler($event) {
      this.$emit('on-focus', this.currentValue, $event);
    },
    onBlur($event) {
      this.setTouched();
      this.validate();
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError() {
      const key = Object.keys(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        const validator = validators[this.isType];
        if (validator) {
          const value = this.currentValue;

          this.valid = validator.fn(value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = `${validator.msg}格式不对哦~`;
            this.getError();
            return;
          }
          delete this.errors.format;
        }
      }

      if (typeof this.isType === 'function') {
        const validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          if (!this.firstError) {
            this.getError();
          }
          return;
        }
        delete this.errors.format;
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符哦`;
          this.valid = false;
          if (!this.firstError) {
            this.getError();
          }
          return;
        }
        delete this.errors.min;
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符哦`;
          this.valid = false;
          this.forceShowError = true;
          return;
        }
        this.forceShowError = false;
        delete this.errors.max;
      }

      this.valid = true;
    },
    validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      const willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
      } else if (!this.currentValue && this.required) {
        this.valid = false;
      } else {
        this.valid = true;
        delete this.errors.equal;
      }
    },
  },
  data() {
    return {
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
    };
  },
  watch: {
    valid() {
      this.getError();
    },
    value(val) {
      this.currentValue = val;
    },
    equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue(newVal) {
      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
      this.$emit('input', newVal);
      this.$emit('on-change', newVal);
    },
  },
};
</script>

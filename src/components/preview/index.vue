<template>
  <div class="weui-form-preview">
    <div class="weui-form-preview__hd">
      <label class="weui-form-preview__label">{{t('preview.label')}}</label>
      <em class="weui-form-preview__value">{{price}}</em>
    </div>
    <slot></slot>
    <div class="weui-form-preview__ft">
      <a class="weui-form-preview__btn weui-form-preview__btn_default"
        @click="onClickOther"
        v-if="btnOther">{{btnOther}}</a>
      <a class="weui-form-preview__btn weui-form-preview__btn_primary"
        @click="onClick"
        v-if="btn">{{btn}}</a>
    </div>
  </div>
</template>
<script>
import locale from '../../mixins/locale';

export default {
  name: 'UiPreview',
  mixins: [locale],
  props: {
    price: {
      type: String,
      default: '0.00',
    },
    btn: [Boolean, String],
    btnOther: [Boolean, String],
  },
  methods: {
    onClick(e) {
      this.$emit('on-click', e);
    },
    onClickOther(e) {
      this.$emit('on-click-other', e);
    },
  },
};
</script>

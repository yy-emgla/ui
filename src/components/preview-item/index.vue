<template>
  <div class="weui-form-preview__bd">
    <div class="weui-form-preview__item">
      <label class="weui-form-preview__label">{{label}}</label>
      <span class="weui-form-preview__value"><slot></slot></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UiPreviewItem',
  props: {
    label: String,
  },
};
</script>

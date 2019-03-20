<template>
  <div class="weui-msg">
    <div class="weui-msg__icon-area">
      <i class="weui-icon_msg"
        :class="success ? 'weui-icon-success' : 'weui-icon-warn'"></i>
    </div>
    <div class="weui-msg__text-area">
      <h2 class="weui-msg__title">{{success ? successText : errorText}}</h2>
      <p class="weui-msg__desc">
        <slot></slot>
      </p>
    </div>
    <div class="weui-msg__opr-area">
      <p class="weui-btn-area">
        <a @click.prevent="" v-if="btn" class="weui-btn weui-btn_primary">{{btn}}</a>
        <a @click.prevent="" v-if="btnOther" class="weui-btn weui-btn_default">{{btnOther}}</a>
      </p>
    </div>
    <div class="weui-msg__extra-area"> </div>
  </div>
</template>
<script>
import locale from '../../mixins/locale';

export default {
  name: 'UiMsg',
  mixins: [locale],
  props: {
    success: Boolean,
    btn: [Boolean, String],
    btnOther: [Boolean, String],
    successText: {
      type: String,
      default: '操作成功',
    },
    errorText: {
      type: String,
      default: '操作失败',
    },
  },
};
</script>

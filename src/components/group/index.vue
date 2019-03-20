<template>
  <div class="ui-group">
    <div class="weui-cells__title" v-if="title" :style="{ color: titleColor }" v-html="title"></div>
    <slot name="title"></slot>
    <div class="weui-cells" :class="{
      'ui-no-group-title': !title
    }" :style="{ marginTop: typeof gutter === 'number' ? (gutter + 'px') : gutter }">
      <slot name="after-title"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UiGroup',
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
  },
};
</script>

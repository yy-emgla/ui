<template>
  <div>
    <ui-button type="primary">页面主操作 Normal</ui-button>
    <ui-button type="primary" loading>页面主操作 Loading</ui-button>
    <ui-button type="primary" disabled>页面主操作 Disabled</ui-button>
    <ui-button type="default">页面次要操作 Normal</ui-button>
    <ui-button type="default" loading>页面次要操作 Loading</ui-button>
    <ui-button type="default" disabled>页面次要操作 Disabled</ui-button>
    <ui-button type="warn">警告类操作 Normal</ui-button>
    <ui-button type="warn" loading>警告类操作 Loading</ui-button>
    <ui-button type="warn" disabled>警告类操作 Disabled</ui-button>
    <div class="button-sp-area">
      <ui-button type="default" plain>按钮</ui-button>
      <ui-button type="default" plain disabled>按钮</ui-button>
      <ui-button type="primary" plain>按钮</ui-button>
      <ui-button type="primary" plain disabled>按钮</ui-button>
      <ui-button type="primary" mini>按钮</ui-button>
      <ui-button type="default" mini>按钮</ui-button>
      <ui-button type="warn" mini>按钮</ui-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClick() {},
  },
};

</script>
<style scoped>
div {
  padding: 15px;
}

.button-sp-area {
  margin: 0 auto;
  padding: 15px;
  width: 60%;
}

</style>

<template>
  <main class="weui-tab">
    <slot name="header"></slot>
    <section class="weui-tab__panel">
      <slot></slot>
    </section>
    <slot name="footer"></slot>
  </main>
</template>
<script>
export default {
  name: 'UiContainer',
};
</script>

<template>
  <section>
    <div class="grid-title">设置grid分布情况</div>
  <ui-grid :cols="3" :rows="3" :gridRows="gridRows" :gridCols="gridCols">
    <ui-grid-item label="Grid" v-for="i in 10" :key="i">
      <img slot="icon" src="//dummyimage.com/50">
    </ui-grid-item>
  </ui-grid>
    <div class="grid-title">没有设置grid分布情况</div>
  <ui-grid :cols="3" :rows="3">
    <ui-grid-item label="Grid" v-for="i in 10" :key="i">
      <img slot="icon" src="//dummyimage.com/50">
    </ui-grid-item>
  </ui-grid>
  </section>
</template>
<script>
export default {
  data() {
    return {
      gridRows: '1fr 2fr 1fr',
      gridCols: '1fr 1fr 2fr',
    };
  },
};
</script>
<style lang="postcss">
  .grid-title{
    background: white;
  }
</style>

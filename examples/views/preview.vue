<template>
  <div>
    <ui-preview btn="操作" @on-click="onClick">
      <ui-preview-item label="商品">电动打蛋机</ui-preview-item>
      <ui-preview-item label="标题标题">名字名字名字</ui-preview-item>
      <ui-preview-item label="标题标题">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</ui-preview-item>
    </ui-preview>
    <br>
    <ui-preview btn="操作" btnOther="辅助操作" @on-click="onClick" @on-click-other="onClickOther">
      <ui-preview-item label="商品">电动打蛋机</ui-preview-item>
      <ui-preview-item label="标题标题">名字名字名字</ui-preview-item>
      <ui-preview-item label="标题标题">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</ui-preview-item>
    </ui-preview>
  </div>
</template>
<script>
export default {
  methods: {
    onClick() {},
    onClickOther() {},
  },
};

</script>

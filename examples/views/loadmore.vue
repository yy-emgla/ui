<template>
  <div>
    <ui-load-more tip="正在加载"></ui-load-more>
    <ui-load-more :loading="false" tip="暂无数据"></ui-load-more>
    <ui-load-more :loading="false"></ui-load-more>
  </div>
</template>
<style scoped>
.content {
  padding: 1px;
  background-color: white;
}
</style>

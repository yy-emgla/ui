<template>
  <div>
    <ui-group>
      <ui-cell title="成功">
        <ui-switch v-model="toast1"></ui-switch>
      </ui-cell>
      <ui-cell title="警告">
        <ui-switch v-model="toast2"></ui-switch>
      </ui-cell>
      <ui-cell title="取消">
        <ui-switch v-model="toast3"></ui-switch>
      </ui-cell>
      <ui-cell title="文本">
        <ui-switch v-model="toast4"></ui-switch>
      </ui-cell>
      <ui-cell title="加载中提示">
        <ui-switch v-model="toast5"></ui-switch>
      </ui-cell>
    </ui-group>
    <ui-toast :show.sync="toast1">成功</ui-toast>
    <ui-toast :show.sync="toast2" type="warn">警告</ui-toast>
    <ui-toast :show.sync="toast3" type="cancel">取消</ui-toast>
    <ui-toast :show.sync="toast4" type="text">文字类型提示文字类型提示</ui-toast>
    <ui-toast :show.sync="toast5" type="loading" mask :time="0">加载中</ui-toast>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toast1: false,
      toast2: false,
      toast3: false,
      toast4: false,
      toast5: false,
    };
  },
};

</script>

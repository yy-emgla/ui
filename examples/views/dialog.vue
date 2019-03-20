<template>
  <div>
    <ui-group>
      <ui-cell :title="txt"></ui-cell>
      <ui-cell title="iOS Dialog样式一">
        <ui-switch v-model="showIOSDialog1"></ui-switch>
      </ui-cell>
      <ui-cell title="iOS Dialog样式二">
        <ui-switch v-model="showIOSDialog2"></ui-switch>
      </ui-cell>
      <ui-cell title="Android Dialog样式一">
        <ui-switch v-model="showAndroidDialog1"></ui-switch>
      </ui-cell>
      <ui-cell title="Android Dialog样式二">
        <ui-switch v-model="showAndroidDialog2"></ui-switch>
      </ui-cell>
    </ui-group>
    <ui-dialog
      top="30%"
      title="弹窗标题"
      cancel-text="关闭"
      confirm-text="好的"
      @on-click="txt='clickIOS1'"
      @on-cancel="txt='cancelIOS1'"
      :show.sync="showIOSDialog1">
      弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
    </ui-dialog>
    <ui-dialog
      alert
      @on-click="txt='clickIOS2'"
      :show.sync="showIOSDialog2">
      弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
    </ui-dialog>
    <ui-dialog
      alert
      is-android
      title="弹窗标题"
      @on-click="txt='clickAndroid1'"
      :show.sync="showAndroidDialog1">
      弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
    </ui-dialog>
    <ui-dialog
      is-android
      @on-click="txt='clickAndroid2'"
      @on-cancel="txt='cancelAndroid2'"
      :show.sync="showAndroidDialog2">
      弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
    </ui-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showIOSDialog1: false,
      showIOSDialog2: false,
      showAndroidDialog1: false,
      showAndroidDialog2: false,
      txt: '',
    };
  },
};

</script>

<template>
  <div>
    <ui-group title="自动上传">
      <ui-cell>
        <ui-uploader
          slot="after-title"
          :action="action"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-progress="onProgress"
          :on-success="onSuccess"
          :on-error="onError"
          :on-exceed="handleExceed"
          :limit="5"
          multiple>
        </ui-uploader>
      </ui-cell>
    </ui-group>
    <ui-group title="手动上传">
      <ui-cell>
        <ui-uploader
          ref="uploader"
          slot="after-title"
          :action="action"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-progress="onProgress"
          :on-success="onSuccess"
          :on-error="onError"
          :on-exceed="handleExceed"
          :auto-upload="false"
          multiple>
        </ui-uploader>
      </ui-cell>
      <ui-cell>
        <ui-button slot="after-title" @click="uploadfile">上传</ui-button>
      </ui-cell>
    </ui-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      action: '/upload',
    };
  },
  methods: {
    uploadfile() {
      this.$refs.uploader.submit();
    },
    onProgress(event, file, fileList) {
      console.log(event, file, fileList, 'onProgress');
    },
    onSuccess(response, file, fileList) {
      console.log(response, file, fileList, 'onSuccess');
    },
    onError(response, file, fileList) {
      console.log(response, file, fileList, 'onError');
    },
    handleRemove(file, fileList) {
      console.log(file, fileList, 'handleRemove');
    },
    handlePreview(file) {
      console.log(file, 'handlePreview');
    },
    handleExceed(files, fileList) {
      console.log(files, fileList, 'handleExceed');
    },
    beforeRemove(file, fileList) {
      console.log(file, fileList, 'beforeRemove');
    },
  },
};
</script>

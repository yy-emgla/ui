<template>
  <div class="weui-uploader">
    <div class="weui-uploader__hd">
      <p class="weui-uploader__title">{{t('ui.uploader.title')}}</p>
      <div class="weui-uploader__info" v-if="limit">{{uploadFiles.length}}/{{limit}}</div>
    </div>
    <div class="weui-uploader__bd">
      <ul class="weui-uploader__files">
        <li class="weui-uploader__file"
          v-for="(file, index) in uploadFiles"
          :key="index"
          @click="show(file)"
          :class="{
            'weui-uploader__file_status': file.status != 'success'
          }"
          :style="{
            'background-image': `url(${file.url})`
          }">
          <div class="weui-uploader__file-content"
            v-if="file.status != 'success'">
            <i class="weui-icon-warn" v-if="file.status == 'fail'"></i>
            {{file.status == 'uploading' ? `${file.percentage}%` : ''}}
          </div>
        </li>
      </ul>
      <upload
        ref="upload-inner"
        :type="type"
        :drag="drag"
        :action="action"
        :multiple="multiple"
        :before-upload="beforeUpload"
        :with-credentials="withCredentials"
        :headers="headers"
        :name="name"
        :data="data"
        :accept="accept"
        :fileList="uploadFiles"
        :autoUpload="autoUpload"
        :listType="listType"
        :disabled="disabled"
        :limit="limit"
        :on-exceed="onExceed"
        :on-start="handleStart"
        :on-progress="handleProgress"
        :on-success="handleSuccess"
        :on-error="handleError"
        :on-preview="onPreview"
        :on-remove="handleRemove"
        :http-request="httpRequest">
      </upload>
    </div>
    <gallery :show.sync="showGallery" :url="url" @delete="showDialog=true"></gallery>
    <ui-dialog :show.sync="showDialog"
      @on-click="onDelete(currentFile)">{{t('uploader.deleteTip')}}</ui-dialog>
  </div>
</template>

<script>
import Gallery from '../gallery';
import UiDialog from '../dialog';
import Upload from './upload';
import locale from '../../mixins/locale';

function noop() {}

export default {
  name: 'UiUploader',
  mixins: [locale],
  components: {
    UiDialog,
    Gallery,
    Upload,
  },

  props: {
    action: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      default: () => ({}),
    },
    data: Object,
    multiple: Boolean,
    name: {
      type: String,
      default: 'file',
    },
    drag: Boolean,
    dragger: Boolean,
    withCredentials: Boolean,
    showFileList: {
      type: Boolean,
      default: true,
    },
    accept: String,
    type: {
      type: String,
      default: 'select',
    },
    beforeUpload: Function,
    beforeRemove: Function,
    onRemove: {
      type: Function,
      default: noop,
    },
    onChange: {
      type: Function,
      default: noop,
    },
    onPreview: {
      type: Function,
    },
    onSuccess: {
      type: Function,
      default: noop,
    },
    onProgress: {
      type: Function,
      default: noop,
    },
    onError: {
      type: Function,
      default: noop,
    },
    fileList: {
      type: Array,
      default: () => ([]),
    },
    autoUpload: {
      type: Boolean,
      default: true,
    },
    listType: {
      type: String,
      default: 'text',
    },
    httpRequest: Function,
    disabled: Boolean,
    limit: Number,
    onExceed: {
      type: Function,
      default: noop,
    },
  },

  data() {
    return {
      uploadFiles: [],
      dragOver: false,
      draging: false,
      tempIndex: 1,
      url: '',
      currentFile: null,
      showGallery: false,
      showDialog: false,
    };
  },

  watch: {
    fileList: {
      immediate: true,
      handler(fileList) {
        this.uploadFiles = fileList.map((item) => {
          console.log(item, 'watch');
          item.uid = item.uid || (Date.now() + (this.tempIndex += 1));
          item.status = 'success';
          return item;
        });
      },
    },
  },

  methods: {
    handleStart(rawFile) {
      rawFile.uid = Date.now() + (this.tempIndex += 1);
      const file = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile,
      };

      try {
        file.url = URL.createObjectURL(rawFile);
      } catch (err) {
        console.error(err);
        return;
      }

      this.uploadFiles.push(file);
      this.onChange(file, this.uploadFiles);
    },
    handleProgress(ev, rawFile) {
      const file = this.getFile(rawFile);
      this.onProgress(ev, file, this.uploadFiles);
      file.status = 'uploading';
      file.percentage = ev.percent || 0;
    },
    handleSuccess(res, rawFile) {
      const file = this.getFile(rawFile);

      if (file) {
        file.status = 'success';
        file.response = res;

        this.onSuccess(res, file, this.uploadFiles);
        this.onChange(file, this.uploadFiles);
      }
    },
    handleError(err, rawFile) {
      const file = this.getFile(rawFile);
      // const fileList = this.uploadFiles;

      file.status = 'fail';

      // fileList.splice(fileList.indexOf(file), 1);

      this.onError(err, file, this.uploadFiles);
      this.onChange(file, this.uploadFiles);
    },
    handleRemove(file, raw) {
      const rmFile = raw ? this.getFile(raw) : file;
      const doRemove = () => {
        this.abort(rmFile);
        const fileList = this.uploadFiles;
        fileList.splice(fileList.indexOf(rmFile), 1);
        this.onRemove(rmFile, fileList);
      };
      if (!this.beforeRemove) {
        doRemove();
      } else if (typeof this.beforeRemove === 'function') {
        const before = this.beforeRemove(rmFile, this.uploadFiles);
        if (before && before.then) {
          before.then(() => {
            doRemove();
          }, noop);
        } else if (before !== false) {
          doRemove();
        }
      }
    },
    getFile(rawFile) {
      const fileList = this.uploadFiles;
      let target;
      fileList.every((item) => {
        target = rawFile.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    abort(file) {
      this.$refs['upload-inner'].abort(file);
    },
    clearFiles() {
      this.uploadFiles = [];
    },
    submit() {
      this.uploadFiles
        .filter(file => file.status === 'ready')
        .forEach((file) => {
          this.$refs['upload-inner'].upload(file.raw);
        });
    },
    show(file) {
      this.showGallery = true;
      this.currentFile = file;
      this.url = file.url;
    },
    onDelete(file) {
      this.handleRemove(file);
      this.showGallery = false;
    },
  },
};
</script>

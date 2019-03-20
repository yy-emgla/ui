<template>
  <div class="weui-uploader__input-box" @click="handleClick" :class="listType">
    <input class="weui-uploader__input"
      type="file"
      ref="input"
      :name="name"
      @change="handleChange"
      :multiple="multiple"
      :accept="accept">
  </div>
</template>
<script>
import ajax from './ajax';

export default {
  props: {
    type: String,
    action: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: 'file',
    },
    data: Object,
    headers: Object,
    withCredentials: Boolean,
    multiple: Boolean,
    accept: String,
    onStart: Function,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeUpload: Function,
    drag: Boolean,
    onPreview: {
      type: Function,
      default() {},
    },
    onRemove: {
      type: Function,
      default() {},
    },
    fileList: Array,
    autoUpload: Boolean,
    listType: String,
    httpRequest: {
      type: Function,
      default: ajax,
    },
    disabled: Boolean,
    limit: Number,
    onExceed: Function,
  },

  data() {
    return {
      mouseover: false,
      reqs: {},
    };
  },

  methods: {
    isImage(str) {
      return str.indexOf('image') !== -1;
    },
    handleChange(ev) {
      const files = ev.target.files;

      if (!files) return;
      this.uploadFiles(files);
    },
    uploadFiles(files) {
      if (this.limit && this.fileList.length + files.length > this.limit) {
        this.onExceed && this.onExceed(files, this.fileList);
        return;
      }

      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) {
        postFiles = postFiles.slice(0, 1);
      }

      if (postFiles.length === 0) {
        return;
      }
      postFiles.forEach((rawFile) => {
        this.onStart(rawFile);
        if (this.autoUpload) this.upload(rawFile);
      });
    },
    upload(rawFile) {
      this.$refs.input.value = null;

      if (!this.beforeUpload) {
        return this.post(rawFile);
      }

      const before = this.beforeUpload(rawFile);
      if (before && before.then) {
        before.then((processedFile) => {
          const fileType = Object.prototype.toString.call(processedFile);
          if (fileType === '[object File]' || fileType === '[object Blob]') {
            this.post(processedFile);
          } else {
            this.post(rawFile);
          }
        }, () => {
          this.onRemove(null, rawFile);
        });
      } else if (before !== false) {
        this.post(rawFile);
      } else {
        this.onRemove(null, rawFile);
      }
      return true;
    },
    abort(file) {
      const { reqs } = this;
      if (file) {
        let uid = file;
        if (file.uid) uid = file.uid;
        if (reqs[uid]) {
          reqs[uid].abort();
        }
      } else {
        Object.keys(reqs).forEach((uid) => {
          if (reqs[uid]) reqs[uid].abort();
          delete reqs[uid];
        });
      }
    },
    post(rawFile) {
      const { uid } = rawFile;
      const options = {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: (e) => {
          this.onProgress(e, rawFile);
        },
        onSuccess: (res) => {
          this.onSuccess(res, rawFile);
          delete this.reqs[uid];
        },
        onError: (err) => {
          this.onError(err, rawFile);
          delete this.reqs[uid];
        },
      };
      const req = this.httpRequest(options);
      this.reqs[uid] = req;
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    },
    handleClick() {
      this.$refs.input.value = null;
    },
  },
};

</script>

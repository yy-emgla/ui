## Uploader 上传

### 基础用法

```html
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

<script>
  export default {
    data() {
      return {
        action: '/upload',
      };
    },
    methods: {
      onProgress(a) {
        console.log(a, 'onProgress');
      },
      onSuccess(a) {
        console.log(a, 'onSuccess');
      },
      onError(a) {
        console.log(a, 'onError');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList, 'handleRemove');
      },
      handlePreview(file) {
        console.log(file, 'handlePreview');
      },
      handleExceed(files) {
        console.log(files, 'handleExceed');
      },
      beforeRemove(file) {
        console.log(file, 'beforeRemove');
      },
    },
  }
</script>
```
### 属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|action | 必选参数,上传的地址 |String |———— |———— |
|headers | 设置上传的请求头 |Object |———— |———— |
|data | 上传时附带的额外参数 |Object |———— |———— |
|multiple | 是否支持多选文件 |Boolean |———— |———— |
|name | 上传的文件字段名 |String |———— |file |
|with-credentials | 是否支持发送 cookie 凭证信息 |Boolean |———— |———— |
|show-file-list | 是否显示已上传文件列表 |Boolean |———— |true |
|accept | 接受上传的文件类型(thumbnail-mode 模式下此参数无效) |String |———— |———— |
|type | 文本内容 |String |———— |———— |
|before-upload | 上传文件之前的钩子,参数为上传的文件,若返回 false 或者返回 Promise 且被 reject,则停止上传. |Function(file) |———— |———— |
|before-remove | 删除文件之前的钩子,参数为上传的文件和文件列表,若返回 false 或者返回 Promise 且被 reject,则停止上传. |Function(file) |———— |———— |
|on-remove | 文件列表移除文件时的钩子 |Function(file, fileList) |———— |———— |
|on-change | 文件状态改变时的钩子,添加文件、上传成功和上传失败时都会被调用 |Function(file, fileList) |———— |———— |
|on-preview | 点击已上传的文件链接时的钩子,可以通过 file.response 拿到服务端返回数据 |Function(file) |———— |———— |
|on-success | 文件上传成功时的钩子 |Function(response, file, fileList) |———— |———— |
|on-error | 文件上传失败时的钩子 |Function(response, file, fileList) |———— |———— |
|on-progress | 文件上传时的钩子 |Function(event, file, fileList) |———— |———— |
|file-list | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] |Array |———— |[] |
|auto-upload | 是否在选取文件后立即进行上传 |boolean |———— |true |
|list-type | 文件列表的类型 |String |text/picture/picture-card |text |
|http-request | 覆盖默认的上传行为,可以自定义上传的实现 |Function |———— |———— |
|disabled | 是否禁用 |Boolean |———— |false |
|limit | 	最大允许上传个数 |Number |———— |———— |
|on-exceed | 文件超出个数限制时的钩子 |Function(file, fileList) |———— |———— |

### 事件

| 事件      | 参数    | 说明      |
|---------- |-------- |---------- |
|clearFiles | ———— |清空已上传的文件列表(该方法不支持在 before-upload 中调用) |

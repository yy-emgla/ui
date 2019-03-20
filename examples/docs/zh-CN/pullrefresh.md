## PullRefresh 下拉刷新

### 基础用法
```html
  <ui-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <ui-group>
      <ui-cell v-for="item in list" :title="item.time" :key="item.id"></ui-cell>
    </ui-group>
  </ui-pull-refresh>
  <script>
  export default {
    data () {
      return {
        isLoading: false,
        list: [{ time }, { time }, { time }, { time }, { time }],
      }
    }
  }
  </script>
```
### attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|pulling | 下拉时显示内容 |String |————|———— |
|loosing | 关闭时显示内容 |String |————|———— |
|value | 是否刷新，使用v-model绑定 |Boolean |————|———— |
|animationDuration | 动画时间 |Number |————|300 |
|headHeight | 拉动判断高度 |Number |————|50 |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |


### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|refresh | ———— | 刷新事件 |

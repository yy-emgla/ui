## Swiper 轮播

### 基础用法

```html
  <ui-swiper auto height="100px">
    <ui-swiper-item v-for="i in 5" :key="i">
      <h2>{{i}}</h2>
    </ui-swiper-item>
  </ui-swiper>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|value | 当前下标页，用v-model绑定 |Number |————|0 |
|list | 列表,元素为由url，img，title，fallbackImg作属性组成的对象，img不存在时展示fallBackImg |Array[Object] |————|———— |
|direction | 方向 |String |horizontal,vertical|horizontal |
|showDots | 是否展示圆点 |Boolean |————|true |
|dotsPosition | 圆点展示位置 |String |right,center|right |
|dotsClass | 圆点class名 |String |————|———— |
|showDescMask | 是否展示title |Boolean |————|true |
|auto | 自动轮播 |Boolean |————|———— |
|loop | 循环 |Boolean |————|———— |
|interval | 轮播定时 |Number |————|3000ms |
|threshold | 拖动换页的判断距离 |Number |————|50 |
|duration | 切换时间 |Number |————|300ms |
|height | 高度 |string |————|auto |
|aspectRatio | 宽高比（高/宽） |Number |————|———— |
|minMovingDistance | 最小移动距离 |Number |————|0 |


### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-get-height | height | 获取当前组件高度 |
|on-click-list-item | object | 设置组件list中的单个元素点击事件 |
|on-index-change | number | 当前下标更改函数 |

## Swiper-item

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

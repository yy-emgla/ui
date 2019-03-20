## Toast 弹出式提示

### 基础用法

```html
<ui-toast :show.sync=false>成功</ui-toast>
<ui-toast :show.sync=false type="warn">警告</ui-toast>
<ui-toast :show.sync=false type="cancel">取消</ui-toast>
<ui-toast :show.sync=false type="loading" mask :time="0">加载中</ui-toast>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|loading | 加载中 |Boolean |————|———— |
|show | 显示 |Boolean |————|———— |
|mask | 背景 |Boolean |————|———— |
|time | 关闭时间 |Number |如果time为0时,toast将不会自动关闭|2000ms |
|type | 类型 |String |success, text, loading, warn, cancel|———— |
|text | 文本内容 |String |————|———— |
|position | 定位 |String |top,middle,bottom|———— |
|transition | 动画的Name |String |————|ui-fade,当position为top时为ui-slide-from-top，bottom时为ui-slide-from-bottom|

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

## Footer 页脚

### 基础用法

```html
<ui-footer fixed></ui-footer>
<ui-footer :links="link"></ui-footer>
<script>
data () {
  return {
    link: [{
      name: '底部链接',
      to: '/link',
    }]
  }
}
</script>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|fixed |是否fix |Boolean |————|false |
|links |页脚链接 |Array |————|———— |
|logo |logo，设置Boolean的时候展示jf的logo,String为class名时展示其他图表 |Boolean,String |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|- | 默认显示内容 |

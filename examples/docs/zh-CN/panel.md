## Panel 面板

### 基础用法

```html
    <ui-panel header="列表" :footer="footer" :list="list" type="1"></ui-panel>
    <script>
    export {
      data () {
        return {
          list: [{
             src: 'src',
             fallbackSrc: 'fallbackSrc',
             title: 'title',
             desc: 'desc',
             url: '/url',
          }],
          footer: {
            title: '查看更多',
            url: '/',
          },
        }
      }
    }
    </script>
```
### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
|header | 头部内容 |String（html） |————|———— |
|type | 展示类型 |String|1, 2, 3, 4, 5|1 |
|footer | 尾部内容{title:XX,url:XX}格式的对象，当且仅当type为3时无效 |String（html） |————|———— |
|list | 内容数组type为1，“图文列表”格式为{id,src,title,desc}</br>type为2:，“文字组合列表”格式为{id,title,desc} </br>type为3:，“小图文组合列表”格式为{id,title,src}</br>type为4:，“文字列表附来源”格式为{id,title,desc,meta:{source,date,other}}</br>type为5:，“图文列表附来源”格式为{id,title,desc,src,meta:{source,date,other}}</br>注：可在list元素内加入fallbackSrc，为图片加载失败展示地址 |Array |————|———— |

### Slot

| 名称      | 说明    |
|---------- |-------- |
|header | 头部显示内容，如若没有显示属性header |
|body | 主体内容，如若没有显示属性list |

### API

| 名称      | 参数    | 说明    |
|---------- |-------- |-------- |
|on-img-error | item（当前list的元素），event（事件） | 图片加载失败回调函数 |
|on-click-footer | ———— | 底部点击事件 |
|on-click-header | ———— | 头部点击事件 |
|on-click-item | item（当前list的元素） | list渲染中的每条单项，如果有url值点击会跳转url对应位置 |


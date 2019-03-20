## 准备开始

---

### 安装

#### NPM & YARN
> 推荐的安装方式，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```bash
npm install fdk-ui
or
yarn add fdk-ui
```

#### 完整引入

In main.js:
```javascript
import Vue from 'vue' // vue需要2.3+
import UI from 'fdk-ui'
import 'fdk-ui/lib/style/index.css'
import App from './App.vue';

Vue.use(UI)

new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了 UI 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

> 借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 的plugins修改为：
```json
{
  "plugins": [["component", [
    {
      "libraryName": "fdk-ui",
      "styleLibraryName": "style"
    }
  ]]]
}
```

接下来，如果你只希望引入部分组件，比如 Button 和 Checkbox，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Checkbox } from 'fdk-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Checkbox.name, Checkbox);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### CDN
> 目前可以通过 [unpkg.com/fdk-ui](https://unpkg.com/fdk-ui/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/fdk-ui/lib/style/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/fdk-ui/lib/index.js"></script>
```

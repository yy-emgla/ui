## Quick Start

---

### Install

#### NPM & YARN
> Installing with npm is recommended and it works seamlessly with [webpack](https://webpack.js.org/).

```bash
npm install fdk-ui
or
yarn add fdk-ui
```

#### Fully import

In main.js:
```javascript
import Vue from 'vue'
import UI from 'fdk-ui'
import 'fdk-ui/lib/style/index.css'
import App from './App.vue';

Vue.use(UI)

new Vue({
  el: '#app',
  render: h => h(App)
});
```
The above imports Element entirely. Note that CSS file needs to be imported separately.

#### On demand

> With the help of [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), we can import components we actually need, making the project smaller than otherwise.

First, install babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Then edit .babelrc:
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

Next, if you need Button and Checkbox, edit main.js:

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
> Get the latest version from [unpkg.com/fdk-ui](https://unpkg.com/fdk-ui/) , and import JavaScript and CSS file in your page.

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/fdk-ui/lib/style/index.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/fdk-ui/lib/index.js"></script>
```

import ToastComponent from '../../components/toast';
import mergeOptions from '../../utils/plugin_helper';

let $vm;
let watcher;

const plugin = {
  install(vue, pluginOptions = {}) {
    const Toast = vue.extend(ToastComponent);

    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div'),
      });
      document.body.appendChild($vm.$el);
    }

    const defaults = {};
    Object.keys($vm.$options.props).forEach((o) => {
      if (o !== 'value') {
        defaults[o] = $vm.$options.props[o].default;
      }
    });

    const toast = {
      show(options = {}) {
        watcher && watcher();
        if (typeof options === 'string') {
          mergeOptions($vm, Object.assign({}, pluginOptions, { text: options }));
        } else if (typeof options === 'object') {
          mergeOptions($vm, Object.assign({}, pluginOptions, options));
        }
        if (typeof options === 'object' && (options.onShow || options.onHide)) {
          watcher = $vm.$watch('show', (val) => {
            val && options.onShow && options.onShow($vm);
            val === false && options.onHide && options.onHide($vm);
          });
        }
        $vm.show = true;
      },
      hide() {
        $vm.show = false;
      },
    };
    vue.prototype.$toast = toast;
  },
};

export default plugin;

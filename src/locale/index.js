import Vue from 'vue';
import defaultMessages from './lang/zh-CN';

const { hasOwnProperty } = Object.prototype;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function assignKey(to, from, key) {
  const val = from[key];

  if (!isDef(val) || (hasOwnProperty.call(to, key) && !isDef(to[key]))) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val)) {
    to[key] = val;
  } else {
    Object.keys(from[key]).forEach((o) => {
      assignKey(Object(to[key]), from[key], o);
    });
    to[key] = Object(to[key]);
  }
}

const proto = Vue.prototype;
const defaultLang = 'zh-CN';
const locale = {
  init() {
    Vue.util.defineReactive(proto, 'lang', defaultLang);
    Vue.util.defineReactive(proto, 'messages', { [defaultLang]: defaultMessages });
  },

  use(lang, messages) {
    proto.lang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    Object.keys(messages).forEach((key) => {
      assignKey(proto.messages, messages, key);
    });
  },
};

locale.init();
export default locale;

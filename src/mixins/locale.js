function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
}

function isDef(value) {
  return value !== undefined && value !== null;
}

function get(object, path) {
  const keys = path.split('.');
  let result = object;

  keys.forEach((key) => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

export default {
  computed: {
    t() {
      const { name } = this.$options;
      const prefix = name ? `${camelize(name)}.` : '';
      const messages = this.messages[this.lang];

      return (path, ...args) => {
        const message = get(messages, prefix + path) || get(messages, path);
        return typeof message === 'function' ? message(...args) : message;
      };
    },
  },
};

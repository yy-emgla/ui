export default ($vm, options) => {
  const defaults = {};

  Object.keys($vm.$options.props).forEach((o) => {
    if (o !== 'value') {
      defaults[o] = $vm.$options.props[o].default;
    }
  });

  const opts = Object.assign({}, defaults, options);

  Object.keys(opts).forEach((o) => {
    $vm[o] = opts[o];
  });
};

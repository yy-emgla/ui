import navConfig from './nav.json';

const load = (path, { docs, group }) => {
  const m = path.match(/\/\w+/g);
  const demo = group ? m[1] : '/index';

  return () => {
    const component = docs
      ? import(`@/docs${path}.md`)
      : import(`@/views${demo}.vue`);

    component.then((o) => {
      o.default.name = `demo-${demo.split('/')[1]}`;
    });
    return component;
  };
};

export default docs => ((nav) => {
  const route = [];

  const addRoute = ({ path, title, group }) => {
    route.push({
      path,
      component: load(path, { docs, group }),
      meta: { title, group },
    });
  };

  Object.entries(nav).forEach((lang) => {
    lang[1].forEach((o) => {
      if (o.list) {
        o.list.forEach((r) => {
          addRoute({
            path: `/${lang[0] + r.path}`,
            title: r.title,
            group: o.name,
          });
        });
      } else {
        addRoute({
          path: `/${lang[0] + o.path}`,
          title: o.title,
        });
      }
    });
  });

  route.push({
    path: '*',
    redirect: '/zh-CN/index',
  });

  return route;
})(navConfig);

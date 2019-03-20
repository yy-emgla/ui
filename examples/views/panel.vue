<template>
  <div>
    <ui-panel header="图文组合列表" :footer="footer" :list="list" type="1"></ui-panel>
    <ui-panel header="文字组合列表" :footer="footer" :list="list" type="2"></ui-panel>
    <ui-panel header="小图文组合列表" :footer="footer" :list="list" type="3"></ui-panel>
    <ui-panel header="文字列表附来源" :footer="footer" :list="list" type="4"></ui-panel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        src: '//dummyimage.com/60/1aad19/fff',
        fallbackSrc: '//dummyimage.com/60',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/',
      }, {
        src: '//dummyimage.com/60',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/',
          replace: false,
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息',
        },
      }],
      footer: {
        title: '查看更多',
        url: '/',
      },
    };
  },
};

</script>

<template>
  <div>
    <ui-footer logo>Copyright &copy; 2017 JuFan FE</ui-footer>
    <ui-footer :links="links" logo>Copyright &copy; 2017 JuFan FE</ui-footer>
    <ui-footer fixed :links="links">Copyright &copy; 2017 JuFan FE</ui-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [{
        name: '底部链接',
        to: '/link1',
      }, {
        name: '底部链接',
        to: '/link2',
      }, {
        name: '底部链接',
        to: '/link3',
      }],
    };
  },
};

</script>
<style scoped>
.weui-footer_fixed-bottom {
  bottom: 10em;
}

</style>

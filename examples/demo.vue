<template>
  <ui-container>
    <ui-header
      slot="header"
      :right-options="{showMore}"
      @on-click-more="showLang=true">
      {{title}}
    </ui-header>
    <transition>
      <router-view class="content"></router-view>
    </transition>
    <ui-actionsheet
      :show.sync="showLang"
      :menus="menu"
      @on-click-menu="switchLang"
      ></ui-actionsheet>
  </ui-container>
</template>
<script>
import { setLang } from './lang';

export default {
  data() {
    return {
      showMore: true,
      showLang: false,
      menu: {
        'zh-CN': '简体中文',
        'en-US': 'English',
      },
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
    group() {
      return this.$route.meta.group;
    },
  },
  methods: {
    switchLang(lang) {
      setLang(lang);
    },
  },
};

</script>
<style lang="postcss">
@import '../src/styles/index';
@import 'icon';

html,
body {
  margin: 0;
  height: 100%;
  background-color: #f4f4f2;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

</style>

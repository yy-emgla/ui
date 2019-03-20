<template>
  <footer class="weui-footer" :class="fixed && 'weui-footer_fixed-bottom'">
    <p v-if="logo">
      <i :class="[icon]"></i>
    </p>
    <p class="weui-footer__links" v-if="links.length">
      <a class="weui-footer__link"
        v-for="item in links"
        :key="item.id"
        @click.prevent="link(item.to)"
        href="">
        {{item.name}}
      </a>
    </p>
    <p class="weui-footer__text">
      <slot></slot>
    </p>
  </footer>
</template>
<script>
import { go } from '../../utils/router';

export default {
  name: 'UiFooter',
  props: {
    fixed: {
      type: Boolean,
    },
    links: {
      type: Array,
      default() {
        return [];
      },
    },
    logo: {
      type: [Boolean, String],
    },
  },
  methods: {
    link(to) {
      go(to);
    },
  },
  computed: {
    icon() {
      if (this.logo && typeof this.logo === 'string') {
        return this.logo;
      }
      return 'iconfont icon-logo';
    },
  },
};
</script>

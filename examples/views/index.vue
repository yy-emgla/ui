<template>
  <div>
    <ui-flex orient="vertical">
      <ui-flex-item>
        <i class="iconfont icon-logo"></i>
      </ui-flex-item>
      <ui-flex-item>
        {{ t('title') }}
      </ui-flex-item>
    </ui-flex>
    <ui-group v-for="o in currentNav" v-if="o.name" :class="{ show: o.show}" :key="o.id">
      <ui-cell :title="o.name.toUpperCase()"
        :border-intent="false"
        :arrow-direction="o.show ? 'up' : 'down'"
        @click.native="o.show = !o.show" is-link></ui-cell>
      <section>
        <ui-cell v-for="item in o.list"
          :title="item.title"
          :link="`/${lang+item.path}`"
          :key="item.id"></ui-cell>
      </section>
    </ui-group>
  </div>
</template>
<script>
import nav from '../nav.json';

export default {
  i18n: {
    'zh-CN': {
      title: '聚泛移动端UI组件库',
    },
    'en-US': {
      title: 'UI Components for Mobile at JuFan',
    },
  },
  data() {
    return {
      nav,
    };
  },
  computed: {
    currentNav() {
      const current = this.nav[this.lang];
      current.forEach((o) => {
        this.$set(o, 'show', o.show);
      });
      return current;
    },
  },
};

</script>
<style lang="postcss" scoped>
.content {
  padding: 1em;
  section {
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .show {
    section {
      max-height: 9999px;
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
      transition-delay: 0s;
    }
    .ui-cell-no-border-intent {
      opacity: .4;
    }
  }
  .weui-flex {
    padding-bottom: 3em;
    text-align: center;
  }
  .weui-flex__item:last-child {
    -webkit-box-reflect: below 0
    linear-gradient(transparent, transparent 20%,
      rgba(255, 255, 255, .3));
  }
  .icon-logo {
    font-size: 3em;
    color: black;
  }
}

</style>

<template>
  <header class="ui-header">
    <div class="ui-header-left">
      <slot name="overwrite-left">
        <transition :name="transition">
          <a class="ui-header-back"
            v-show="cLeftOptions.showBack"
            @click.prevent="onClickBack">{{
              typeof cLeftOptions.backText === 'undefined'
                ? t('header.backText')
                : cLeftOptions.backText}}</a>
        </transition>
        <transition :name="transition">
          <div class="left-arrow" @click="onClickBack" v-show="cLeftOptions.showBack"></div>
        </transition>
      </slot>
      <slot name="left"></slot>
    </div>
    <h1 class="ui-header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="ui-header-title-area" v-if="shouldOverWriteTitle">
      <slot name="overwrite-title"></slot>
    </div>
    <div class="ui-header-right">
      <a class="ui-header-more"
        @click.prevent="$emit('on-click-more')"
        v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script>
import locale from '../../mixins/locale';

export default {
  name: 'UiHeader',
  mixins: [locale],
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default() {
        return {
          showMore: false,
        };
      },
    },
  },
  beforeMount() {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true;
    }
  },
  computed: {
    cLeftOptions() {
      return Object.assign({
        showBack: true,
        preventGoBack: false,
      }, this.leftOptions || {});
    },
  },
  methods: {
    onClickBack() {
      if (this.cLeftOptions.preventGoBack) {
        this.$emit('on-click-back');
      } else {
        this.$router ? this.$router.back() : window.history.back();
      }
    },
  },
  data() {
    return {
      shouldOverWriteTitle: false,
    };
  },
};
</script>

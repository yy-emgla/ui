<template>
  <a href="javascript:;"
    class="weui-tabbar__item"
    :class="{'weui-bar__item_on': isActive, 'ui-tabbar-simple': simple}"
    @click="onItemClick(true)">
    <div class="weui-tabbar__icon" :class="iconClass || $parent.iconClass" v-if="!simple">
      <slot name="icon" v-if="!simple && !(hasActiveIcon && isActive)"></slot>
      <slot name="icon-active" v-if="!simple && hasActiveIcon && isActive"></slot>
      <slot></slot>
    </div>
    <p class="weui-tabbar__label">
      <slot name="label"></slot>
    </p>
  </a>
</template>
<script>
import { childMixin } from '../../mixins/multi-items';
import Badge from '../badge';

export default {
  name: 'UiTabbarItem',
  components: {
    Badge,
  },
  mounted() {
    if (!this.$slots.icon) {
      this.simple = true;
    }
    if (this.$slots['icon-active']) {
      this.hasActiveIcon = true;
    }
  },
  mixins: [childMixin],
  props: {
    link: [String, Object],
    iconClass: String,
  },
  computed: {
    isActive() {
      return this.$parent.index === this.currentIndex;
    },
  },
  data() {
    return {
      simple: false,
      hasActiveIcon: false,
    };
  },
};
</script>

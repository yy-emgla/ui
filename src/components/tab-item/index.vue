<template>
  <div class="ui-tab-item"
    :class="[
      currentSelected ? activeClass : '',
      {
        'ui-tab-selected': currentSelected,
        'ui-tab-disabled': disabled
      }]"
    :style="style"
    @click="onItemClick">
    <slot></slot>
    <span
      :style="{background: badgeBackground, color: badgeColor}"
      class="ui-tab-item-badge"
      v-if="typeof badgeLabel !== 'undefined' && badgeLabel !== ''">
    {{ badgeLabel }}</span>
  </div>
</template>
<script>
import { childMixin } from '../../mixins/multi-items';

export default {
  name: 'UiTabItem',
  mixins: [childMixin],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31',
    },
    badgeColor: {
      type: String,
      default: '#fff',
    },
    badgeLabel: String,
  },
  computed: {
    style() {
      let color = this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor;
      color = this.currentSelected ? this.$parent.activeColor : color;
      return {
        borderWidth: `${this.$parent.lineWidth}px`,
        borderColor: this.$parent.activeColor,
        border: this.$parent.animate ? 'none' : 'auto',
        color,
      };
    },
  },
};
</script>

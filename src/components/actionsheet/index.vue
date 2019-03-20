<template>
  <div class="ui-actionsheet">
    <ui-mask :show.sync="show" @click="onClickingMask"></ui-mask>
    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': show}" v-if="!isAndroid">
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" v-if="hasHeaderSlot">
          <slot name="header"></slot>
        </div>
        <div class="weui-actionsheet__cell"
          v-for="(text, key) in menus"
          :key="key"
          @click="onMenuClick(text, key)"
          v-html="text.label || text"
          :class="`ui-actionsheet-menu-${text.type || 'default'}`">
        </div>
      </div>
      <div class="weui-actionsheet__action"
        @click="emitEvent('on-click-menu', 'cancel')"
        v-if="showCancel">
        <div class="weui-actionsheet__cell">{{cancelText || t('cancel')}}</div>
      </div>
    </div>
    <div class="weui-skin_android" v-else>
      <transition name="ui-popup">
        <div class="weui-actionsheet" v-show="show">
          <div class="weui-actionsheet__menu">
            <div class="weui-actionsheet__cell"
              v-for="(text, key) in menus"
              :key="key"
              @click="onMenuClick(text, key)"
              v-html="text.label || text">
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import UiMask from '../mask';
import locale from '../../mixins/locale';

export default {
  name: 'UiActionsheet',
  mixins: [locale],
  components: {
    UiMask,
  },
  mounted() {
    this.hasHeaderSlot = !!this.$slots.header;
    this.$nextTick(() => {
      this.$tabbar = document.querySelector('.weui-tabbar');
    });
  },
  props: {
    show: Boolean,
    showCancel: Boolean,
    isAndroid: Boolean,
    cancelText: String,
    menus: {
      type: [Object, Array],
      default: () => ({}),
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true,
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hasHeaderSlot: false,
    };
  },
  methods: {
    onMenuClick(text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key, text);
      } else if (text.type !== 'disabled' && text.type !== 'info') {
        if (text.value || text.value === 0) {
          this.emitEvent('on-click-menu', text.value, text);
        } else {
          this.emitEvent('on-click-menu', '', text);
          this.$emit('update:show', false);
        }
      }
    },
    onClickingMask() {
      this.$emit('on-click-mask');
      this.closeOnClickingMask && this.$emit('update:show', false);
    },
    emitEvent(event, menu, item) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        let o = item;
        if (typeof o === 'object') {
          o = JSON.parse(JSON.stringify(o));
        }
        this.$emit(event, menu, o);
        this.$emit(`${event}-${menu}`);
        this.closeOnClickingMenu && this.$emit('update:show', false);
      }
    },
    fixIos(zIndex) {
      if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
        return;
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    },
  },
  beforeDestroy() {
    this.fixIos(100);
  },
};
</script>

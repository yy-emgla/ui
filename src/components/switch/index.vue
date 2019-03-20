<template>
  <div class="weui-cell_switch">
    <input class="weui-switch" @click="inputClick"
           type="checkbox" :disabled="disabled" v-model="currentValue" />
  </div>
</template>
<script>
export default {
  name: 'UiSwitch',
  props: {
    title: {
      type: String,
    },
    disabled: Boolean,
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    preventDefault: Boolean,
    valueMap: {
      type: Array,
      default: () => ([false, true]),
    },
  },
  data() {
    return {
      currentValue: this.toBoolean(this.value),
    };
  },
  methods: {
    toBoolean(val) {
      if (!this.valueMap) {
        return val;
      }
      return this.valueMap.indexOf(val) === 1;
    },
    toRaw(val) {
      if (!this.valueMap) {
        return val;
      }
      return this.valueMap[val ? 1 : 0];
    },
    inputClick(event) {
      this.preventDefault && event.stopPropagation();
    },
  },
  watch: {
    currentValue(val, oldVal) {
      const rawValue = this.toRaw(val);
      const lodValue = this.toRaw(oldVal);
      this.$emit('input', rawValue);
      this.$emit('on-change', rawValue, lodValue);
    },
    value(val) {
      this.currentValue = this.toBoolean(val);
    },
  },
};
</script>

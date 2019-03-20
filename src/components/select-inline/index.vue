<template>
  <div class="ui-selected-inline">
    <slot name="before" v-if="bText"><span class="b-text">{{bText}}</span></slot>
    <label class=""
           :for="`checkbox_${uuid}_${index}`"
           v-for="(one, index) in currentOptions"
           :key="index">
    <input type="checkbox"
           class="weui-check"
           :name="`ui-checkbox-${uuid}`"
           :value="getKey(one)"
           v-model="currentValue"
           :id="disabled ? '' : `checkbox_${uuid}_${index}`"
           :disabled="isDisabled(getKey(one))">
      <p class="ui-select-bd">
        <slot :item="{val:one, index: index, checked: checked(getKey(one))}">
          <p class="ui-select-option" :class="{'ui-select-style': !isText}"
             v-html="getValue(one)"></p>
        </slot>
      </p>
    </label>
  </div>
</template>

<script>
import checkBox from './../checkbox/index';

export default {
  name: 'UiSelectInline',
  mixins: [checkBox],
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    bText: String,
    options: {
      type: Array,
      required: true,
    },
    isText: Boolean,
    value: {
      type: Array,
      default: () => [],
    },
    max: Number,
    min: Number,
    fillMode: Boolean,
    checkDisabled: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
  },
  methods: {
    checked(key) {
      return this.currentValue.includes(key);
    },
  },
};
</script>


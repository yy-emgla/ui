<template>
  <div>
    <ui-checkbox title="Basic Usage"
      :label-position="labelPosition"
      required
      :options="commonList"
      v-model="checkbox001"
      @on-change="change"></ui-checkbox>
    <div style="padding:15px;">
      <ui-button
        @click="labelPosition = labelPosition === 'left' ? '' : 'left'"
        mini> 切换 label 位置 </ui-button>
      <ui-button @click="selectFirst" mini> 选择第1个值 </ui-button>
      <ui-button @click="selectFirstTwo" mini> 选择前两个值 </ui-button>
    </div>
    <ui-checkbox title="默认选中 China 和 Japan (禁用操作)"
      disabled
      label-position="left"
      :options="commonList"
      v-model="checkbox002"
      @on-change="change"></ui-checkbox>
    <ui-checkbox title="最多可选中2个"
      :options="commonList"
      v-model="checkbox003"
      :max="2"
      @on-change="change"></ui-checkbox>
    <ui-checkbox title="max=1（单选模式）"
      :options="commonList"
      v-model="radioValue"
      :max="1"
      @on-change="change"></ui-checkbox>
    <ui-checkbox ref="demoObject"
      title="使用 Object 类型的选项列表，key 必须为字符串"
      :options="objectList"
      v-model="objectListValue"
      @on-change="change"></ui-checkbox>
    <ui-group>
      <ui-cell>{{ fullValues }}</ui-cell>
    </ui-group>
    <div style="padding:15px;">
      <ui-button mini
        @click="fullValues = $refs.demoObject.getFullValue()">
        getFullValue()
      </ui-button>
    </div>
    <ui-checkbox
      title="包含 inlineDesc 属性的 Object 类型选项列表"
      :options="inlineDescList"
      v-model="inlineDescListValue"
      required
      @on-error="onError"
      :min=4
      :fillMode=true
      @on-change="change"></ui-checkbox>
    <ui-checkbox title="异步选项列表"
      :options="asyncList"
      v-model="asyncListValue"
      @on-change="change"></ui-checkbox>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.asyncList = ['A', 'B', 'C', 'D'];
    }, 3000);
  },
  methods: {
    change(val, label) {
      console.log('change', val, label);
    },
    selectFirst() {
      this.checkbox001 = ['China'];
    },
    selectFirstTwo() {
      this.checkbox001 = ['China', 'Japan'];
    },
    onError(err) {
      console.info('showErr', err);
    },
  },
  data() {
    return {
      fullValues: [],
      labelPosition: '',
      error: '',
      commonList: ['China', 'Japan', 'America'],
      checkbox001: [],
      checkbox0011: [],
      checkbox002: ['China', 'Japan'],
      checkbox003: ['China', 'Japan'],
      checkbox005: ['01', '02', '03'],
      checkbox005Value: [],
      objectList: [{ key: '1', value: '001 value' }, { key: '2', value: '002 value' }, { key: '3', value: '003 value' }],
      objectListValue: ['1', '2'],
      inlineDescList: [
        { key: '1', value: 'Tiger is good', inlineDesc: 'Tiger is the king of mountain' },
        { key: '2', value: 'Lion is better', inlineDesc: 'Lion is the king of woods' },
        { key: '3', value: 'Camel is best, no inline-desc' },
      ],
      inlineDescListValue: [1],
      asyncList: [],
      asyncListValue: [],
      radioValue: ['China'],
    };
  },
};

</script>
<style scoped>
.error {
  padding-left: 15px;
  line-height: 28px;
  color: #888;
  font-size: 12px;
}

</style>

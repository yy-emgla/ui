<template>
  <div>
    <ui-search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></ui-search>
    <ui-group>
      <ui-cell title="keyword">{{value}}</ui-cell>
    </ui-group>
    <div style="padding:15px;">
      <ui-button @click.native="setFocus" type="primary">set focus</ui-button>
    </div>
    <br>
    <ui-search
      @on-submit="onSubmit"
      :auto-fixed="autoFixed"
      @on-focus="onFocus"
      @on-cancel="onCancel"></ui-search>
    <br>
    <ui-search
      @on-submit="onSubmit"
      :auto-fixed="false"
      v-model="value"
      @on-focus="onFocus"
      @on-cancel="onCancel"></ui-search>
  </div>
</template>
<script>
function getResult(val) {
  const rs = [];
  for (let i = 0; i < 20; i += 1) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i,
    });
  }
  return rs;
}
export default {
  data() {
    return {
      results: [],
      autoFixed: false,
      value: 'test',
    };
  },
  methods: {
    setFocus() {
      this.$refs.search.setFocus();
    },
    resultClick(item) {
      console.log(`you click the result item: ${JSON.stringify(item)}`);
    },
    getResult(val) {
      console.log('on-change', val);
      this.results = val ? getResult(this.value) : [];
    },
    onSubmit() {
      this.$refs.search.setBlur();
    },
    onFocus() {
      console.log('on focus');
    },
    onCancel() {
      console.log('on cancel');
    },
  },
};
</script>

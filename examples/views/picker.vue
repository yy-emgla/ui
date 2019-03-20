<template>
  <div>
    <ui-group>
      <ui-cell :title="`默认，不设置默认值时选中第一个${year1}`">
        <ui-switch v-model="show1"></ui-switch>
      </ui-cell>
      <ui-cell title="设置默认值时">
        <ui-switch v-model="show3"></ui-switch>
      </ui-cell>
      <ui-cell title="非联动多列">
        <ui-switch v-model="show5"></ui-switch>
      </ui-cell>
      <ui-cell title="五列">
        <ui-switch v-model="show6"></ui-switch>
      </ui-cell>
      <ui-cell title="3列的数据，只显示两列">
        <ui-switch v-model="show8"></ui-switch>
      </ui-cell>
    </ui-group>
    <ui-group title="双向绑定">
      <ui-cell>
        <span slot="title">
          <select v-model="year5">
            <option v-for="one in years[0]"
              :key="one.id"
              :value="one.value">{{one.name}}</option>
          </select>
        </span>
        <ui-switch v-model="show4"></ui-switch>
      </ui-cell>
    </ui-group>
    <ui-group :title="`异步加载及动态改变数据: ${year001}`">
      <ui-cell>
        <span slot="title">
          <ui-button mini @click="changeValue([
            ['1','3','5','7','9','11'],
            ['2','3','4','5'],
            ['a','b','c']])">DATA1</ui-button>
          <ui-button mini @click="changeValue([
            ['1','3','5','7','9','11'],
            ['2','3','4','5']])">DATA2</ui-button>
          <ui-button mini @click="changeValue([
            ['2','4','6','8','10','11']])">DATA3</ui-button>
        </span>
        <ui-switch v-model="show2"></ui-switch>
      </ui-cell>
    </ui-group>
    <ui-group :title="`地区联动: ${$refs.picker1&&$refs.picker1.getNameValues()}`">
      <ui-cell>
        <span slot="title">
          <ui-button @click="setData1" mini>AREA1</ui-button>
          <ui-button @click="setData2" mini>AREA2</ui-button>
          <ui-button @click="setList" mini>ADD</ui-button>
        </span>
        <ui-switch v-model="show7"></ui-switch>
      </ui-cell>
    </ui-group>
    <ui-picker :show.sync="show1"
      :data='years'
      v-model='year1'
      @on-change='change'></ui-picker>
    <ui-picker :show.sync="show2"
      :data='years001'
      v-model='year001'
      @on-change='change'></ui-picker>
    <ui-picker :show.sync="show3"
      :data='years'
      v-model='year2'
      @on-change='change'></ui-picker>
    <ui-picker :show.sync="show4"
      :data='years'
      v-model='year3'
      @on-change='change3'></ui-picker>
    <ui-picker :show.sync="show5"
      :data='years1'
      v-model='year4'
      @on-change='change'></ui-picker>
    <ui-picker :show.sync="show6"
      :data='year6'
      v-model='year6Value'
      @on-change='change'></ui-picker>
    <ui-picker :show.sync="show7"
      :data='year7'
      :columns="3"
      v-model="year7Value"
      @on-change="change"
      ref="picker1"></ui-picker>
    <ui-picker :show.sync="show8"
      :data="year7"
      :fixed-columns="2"
      :columns="3"
      v-model="year8Value"
      @on-change="change"></ui-picker>
    <!-- 发卡行 -->
    <ui-picker :show.sync="issuerPicker"
               :data="banks"
               :header="true"
               @cancel="cancel"
               @confirm="confirm"
               v-model="issuerPickerV"
               @on-change="issuerChange"></ui-picker>
  </div>
</template>
<script>
const years = [];
for (let i = 2000; i <= 2030; i += 1) {
  years.push({
    name: `${i}年`,
    value: `${i}`,
  });
}
export default {
  methods: {
    changeValue(value) {
      this.years001 = value;
    },
    change(value) {
      console.log('new Value', value);
    },
    change3(value) {
      this.year5 = value[0];
    },
    setData1() {
      this.year7Value = ['USA', 'usa002', '0005'];
    },
    setData2() {
      this.year7Value = ['china', 'china002', 'gz'];
    },
    setList() {
      this.year7.push({
        name: '美国002_003',
        value: '0007',
        parent: 'usa002',
      });
    },
    cancel(event) {
      console.info(event);
    },
    confirm(value, event) {
      console.info(event);
    },
    issuerChange() {},
  },
  watch: {
    year5: {
      handler(val) {
        this.year3[0] = val;
        // this.year3.$set(0, val);
        this.$set(this.year3, 0, val);
      },
      deep: true,
    },
    change3(value) {
      this.year5 = value[0];
    },
  },
  data() {
    return {
      issuerPicker: true,
      issuerPickerV: ['1111'],
      banks: [[1, 2, 3]],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      years: [years],
      years001: [],
      year001: [],
      years1: [years, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
      year1: [''],
      year2: ['2002'],
      year3: ['2005'],
      year4: ['2002', '4'],
      year5: '2005',
      year6: [
        ['你', '我', '他'],
        ['you', 'I', 'him'],
        ['ni', 'wo', 'ta'],
        [1, 2, 3, 4, 5],
        [5, 4, 3, 2, 1],
      ],
      year6Value: ['我', 'him', 'ni', '1', '2'],
      year7: [{
        name: '中国',
        value: 'china',
        parent: 0,
      }, {
        name: '美国',
        value: 'USA',
        parent: 0,
      }, {
        name: '广东',
        value: 'china001',
        parent: 'china',
      }, {
        name: '广西',
        value: 'china002',
        parent: 'china',
      }, {
        name: '美国001',
        value: 'usa001',
        parent: 'USA',
      }, {
        name: '美国002',
        value: 'usa002',
        parent: 'USA',
      }, {
        name: '广州',
        value: 'gz',
        parent: 'china001',
      }, {
        name: '深圳',
        value: 'sz',
        parent: 'china001',
      }, {
        name: '广西001',
        value: 'gz',
        parent: 'china002',
      }, {
        name: '广西002',
        value: 'sz',
        parent: 'china002',
      }, {
        name: '美国001_001',
        value: '0003',
        parent: 'usa001',
      }, {
        name: '美国001_002',
        value: '0004',
        parent: 'usa001',
      }, {
        name: '美国002_001',
        value: '0005',
        parent: 'usa002',
      }, {
        name: '美国002_002',
        value: '0006',
        parent: 'usa002',
      }],
      year7Value: [],
      year8Value: [],
    };
  },
};

</script>

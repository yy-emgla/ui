<template>
  <div>
    <ui-group>
      <ui-cell title="显示">
        <ui-switch v-model="show"></ui-switch>
      </ui-cell>
        <ui-input title="头部文字" v-model="text"></ui-input>
      <ui-cell title="是否有头部">
        <ui-switch v-model="header"></ui-switch>
      </ui-cell>
      <ui-cell title="是否有遮盖层">
        <ui-switch v-model="showMask"></ui-switch>
      </ui-cell>
      <ui-cell :title="`设置高度${height}`">
        <ui-switch v-model="showHeight"></ui-switch>
        <ui-picker :show.sync="showHeight"
                   :data="heightDataNV"
                   :fixed-columns="2"
                   v-model="pickHeight"></ui-picker>
      </ui-cell>
    </ui-group>
    <ui-popup v-model="show"
              :header="header"
              :height="height"
              @cancel="cancel"
              :showMask="showMask"
              :headerText="text">
      <ui-cell title="显示">
        <ui-switch v-model="show"></ui-switch>
      </ui-cell>
    </ui-popup>
  </div>
</template>
<script>
export default {
  methods: {
    change(value) {
      console.log('new Value', value);
    },
    cancel() {
      this.show = false;
    },
  },
  watch: {
    pickHeight(val) {
      this.height = val[0];
    },
  },
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      years: [],
      showMask: true,
      year1: [''],
      header: true,
      height: '300px',
      pickHeight: ['300px'],
      showHeight: false,
      heightData: [['100px', '200px', '300px', '35%', '50%', '100%']],
      heightDataNV: [[{
        name: '100px',
        value: '100px',
      }, {
        name: '300px',
        value: '300px',
      }, {
        name: '30%',
        value: '30%',
      }, {
        name: '50%',
        value: '50%',
      }, {
        name: '90%',
        value: '90%',
      }, {
        name: '100%',
        value: '100%',
      }]],
      text: '^.^',
    };
  },
};

</script>

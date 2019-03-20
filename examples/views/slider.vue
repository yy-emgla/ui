<template>
  <div>
    <ui-group title="基本使用">
      <ui-cell>
        <ui-slider slot="title" v-model="value1"></ui-slider>
      </ui-cell>
    </ui-group>
    <ui-group title="取值范围">
      <ui-cell>
        <ui-slider slot="title" v-model="value2" :min="10" :max="90"></ui-slider>
      </ui-cell>
    </ui-group>
    <ui-group title="线宽,已拖拉区域背景,隐藏value">
      <ui-cell>
        <ui-slider slot="title" v-model="value2" :showValue="false" :min="10" :max="90"
                   :line-width="4" :back-color="'#555555'"></ui-slider>
      </ui-cell>
    </ui-group>
    <ui-group title="滑块slot">
      <ui-cell>
        <ui-slider slot="title" v-model="value2" :min="10" :max="90">
          <div style="width: 100%;text-align: center" slot="handle">{{value2}}</div>
        </ui-slider>
      </ui-cell>
    </ui-group>
    <ui-group title="步长">
      <ui-cell>
        <ui-slider slot="title" v-model="value5" :min="0" :max="90" :step="20"></ui-slider>
      </ui-cell>
    </ui-group>
    <ui-group title="禁用">
      <ui-cell>
        <ui-slider slot="title" v-model="value4" disabled></ui-slider>
      </ui-cell>
    </ui-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 20,
      value3: 0,
      value4: 50,
      value5: 0,
    };
  },
};

</script>

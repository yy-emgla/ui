<template>
  <div>
    <ui-group title="default">
      <ui-radio :options="radio001" @on-change="change"></ui-radio>
    </ui-group>
    <ui-group title="默认值 China(禁用操作)">
      <ui-radio :options="radio001" value="China" disabled></ui-radio>
    </ui-group>
    <ui-group :title="'fill mode value is '+radio001Value">
      <ui-radio
        fill-mode
        :selected-label-style="{color: '#FF9900'}"
        :options="radio001"
        v-model="radio001Value"
        @on-change="change"></ui-radio>
    </ui-group>
    <ui-group title="fill mode with custom placeholder and label">
      <ui-radio
        fill-mode
        fill-label="Other"
        fill-placeholder="填写其他的哦"
        :options="radio001"
        @on-change="change"></ui-radio>
    </ui-group>
    <ui-group title="object options">
      <ui-radio
        fill-mode
        fill-label="Other"
        fill-placeholder="other"
        :options="radio003"
        @on-change="change"></ui-radio>
    </ui-group>
    <ui-group title="slot:each-item">
      <ui-radio :options="radio001">
        <template slot-scope="props" slot="each-item">
          <p>
            {{ props.index }}
            <img src="//dummyimage.com/110" class="ui-radio-icon">
            {{ props.label }}
          </p>
        </template>
      </ui-radio>
    </ui-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio001: ['China', 'Japan'],
      radio001Value: 'China',
      radio002Value: 'Japan',
      radio003: [{
        icon: '//dummyimage.com/110',
        key: '001',
        value: 'radio001',
      }, {
        icon: '//dummyimage.com/110',
        key: '002',
        value: 'radio002',
      }],
    };
  },
  methods: {
    change(value, label) {
      console.log('change:', value, label);
    },
  },
};

</script>

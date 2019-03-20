<template>
  <ui-group>
    <ui-cell @click.native="clickCell" :title="`基本使用${open1}`">
      <ui-switch v-model="open1" @on-change="change"
                 :preventDefault=true :valueMap="valueMap"></ui-switch>
    </ui-cell>
    <ui-cell title="禁用">
      <ui-switch v-model="open2" disabled></ui-switch>
    </ui-cell>
    <ui-switch v-model="open1" @on-change="change"
               :preventDefault=true :valueMap="valueMap"></ui-switch>
  </ui-group>
</template>
<script>
export default {
  data() {
    return {
      open1: 'das',
      open2: false,
      valueMap: ['sad', 'das'],
    };
  },
  methods: {
    clickCell() {
      console.info('点击了cell');
    },
    change(val, old) {
      console.info(val, old);
    },
  },
};

</script>

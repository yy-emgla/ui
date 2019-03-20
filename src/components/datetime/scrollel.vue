<template>
  <div class="weui-picker__content" data-role="content">
    <div v-for="(row, index) in array" :key="index" :class="temClass"
         :data-value="JSON.stringify({value: encodeURI(row)})">
      {{row}}</div>
  </div>
</template>

<script>
export default {
  props: ['dataArray', 'temClass', 'dayrender'],
  data() {
    return {
      array: this.dataArray,
    };
  },
  watch: {
    dataArray(val) {
      this.array = val;
    },
    array() {
      this.$nextTick(() => {
        this.dayrender();
      });
    },
  },
};
</script>


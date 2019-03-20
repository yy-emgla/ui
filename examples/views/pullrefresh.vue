<template>
  <ui-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <ui-group>
      <ui-cell v-for="item in list" :title="item.time" :key="item.id"></ui-cell>
    </ui-group>
  </ui-pull-refresh>
</template>
<script>
const time = new Date().getTime();

export default {
  data() {
    return {
      isLoading: false,
      list: [{ time }, { time }, { time }, { time }, { time }],
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast.show('刷新成功');
        this.isLoading = false;
        this.list.forEach((o) => {
          o.time = new Date().getTime();
        });
      }, 500);
    },
  },
};

</script>

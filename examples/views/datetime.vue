<template>
  <section class="datetime-view">
    <ui-group>
      <ui-cell title="展示">
        <ui-switch v-model="show1"></ui-switch>
      </ui-cell>
    </ui-group>
    <ui-datetime @on-change="change" :show.sync="show1" v-model="time"></ui-datetime>
  </section>
</template>

<script>

export default {
  data() {
    return {
      show1: true,
      time: new Date(),
    };
  },
  methods: {
    change(val) {
      console.info('datetimeChange', val);
    },
  },
  mounted() {
  },
};
</script>

<style lang="postcss">
.datetime-view{

}
</style>

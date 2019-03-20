<template>
  <div>
    <ui-progress></ui-progress>
    <br>
    <ui-progress :percent="30" :show-cancel="false"></ui-progress>
    <br>
    <ui-progress :percent="progress" @on-cancel="progress=0"></ui-progress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      progress: 80,
    };
  },
};

</script>
<style>
.weui-progress__inner-bar {
  transition: width 1s;
}

</style>

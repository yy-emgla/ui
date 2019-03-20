<template>
  <div class="weui-loadmore"
    :class="{
      'weui-loadmore_line':!loading,
      'weui-loadmore_dot': !loading && !tip}">
    <i class="weui-loading" v-if="loading"></i>
    <span class="weui-loadmore__tips" v-show="tip || !loading">{{tip}}</span>
  </div>
</template>
<script>
export default {
  name: 'UiLoadMore',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    tip: String,
  },
};
</script>

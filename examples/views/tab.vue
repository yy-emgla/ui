<template>
  <div>
    <h3>基础使用</h3>
    <ui-tab>
      <ui-tab-item selected @on-item-click="onItemClick">已发货</ui-tab-item>
      <ui-tab-item @on-item-click="onItemClick">未发货</ui-tab-item>
      <ui-tab-item @on-item-click="onItemClick">全部订单</ui-tab-item>
    </ui-tab>
    <h3>手动切换</h3>
    <ui-tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
      <ui-tab-item selected>已发货</ui-tab-item>
      <ui-tab-item>未发货</ui-tab-item>
      <ui-tab-item>全部订单</ui-tab-item>
    </ui-tab>
    <h3>定义bar固定宽度</h3>
    <ui-tab :line-width="1" custom-bar-width="60px">
      <ui-tab-item selected>已发货</ui-tab-item>
      <ui-tab-item>未发货</ui-tab-item>
      <ui-tab-item>全部订单</ui-tab-item>
    </ui-tab>
    <h3>使用函数定义bar宽度</h3>
    <ui-tab :line-width="1" :custom-bar-width="getBarWidth">
      <ui-tab-item selected>AA</ui-tab-item>
      <ui-tab-item>AAAA</ui-tab-item>
      <ui-tab-item>AAAAAAA</ui-tab-item>
    </ui-tab>
    <br/>
    <h3>设置颜色</h3>
    <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
      <ui-tab style="width:500px;" bar-active-color="#668599" :line-width="1">
        <ui-tab-item>已发货</ui-tab-item>
        <ui-tab-item selected>未发货</ui-tab-item>
        <ui-tab-item>全部订单</ui-tab-item>
        <ui-tab-item>全部订单</ui-tab-item>
        <ui-tab-item>全部订单</ui-tab-item>
      </ui-tab>
    </div>
    <h3>different active class</h3>
    <ui-tab :animate="false">
      <ui-tab-item active-class="active-6-1">已发货</ui-tab-item>
      <ui-tab-item active-class="active-6-2" selected>未发货</ui-tab-item>
      <ui-tab-item active-class="active-6-3">全部订单</ui-tab-item>
    </ui-tab>
    <h3>no animation</h3>
    <ui-tab :animate="false">
      <ui-tab-item>已发货</ui-tab-item>
      <ui-tab-item selected>未发货</ui-tab-item>
      <ui-tab-item>全部订单</ui-tab-item>
    </ui-tab>
    <h3>disabled</h3>
    <ui-tab>
      <ui-tab-item selected>A</ui-tab-item>
      <ui-tab-item>B</ui-tab-item>
      <ui-tab-item disabled>Disabled</ui-tab-item>
    </ui-tab>
    <h3>tab-item badge</h3>
    <ui-tab>
      <ui-tab-item selected badge-label="1">收到的消息</ui-tab-item>
      <ui-tab-item badge-background="#38C972" badge-color="#fff" badge-label="2">发出的消息</ui-tab-item>
    </ui-tab>
    <h3>tab-item change</h3>
    <div class="box">
      <ui-button mini @click="index=0" :disabled="index === 0">go to 0</ui-button>
      <ui-button mini @click="index=1" :disabled="index === 1">go to 1</ui-button>
      <ui-button mini @click="addTab" :disabled="list2.length === 5">Add tab item</ui-button>
      <ui-button mini @click="removeTab" :disabled="list2.length <= 2">Remove tab item</ui-button>
      <ui-button mini @click="next">Active next current: {{index}}</ui-button>
      <ui-button mini @click="prev">Active prev current: {{index}}</ui-button>
    </div>
    <div>
      <ui-tab :line-width="2" active-color='#fc378c' v-model="index">
        <ui-tab-item
          :selected="demo2 === item"
          v-for="(item, index) in list2"
          @click="demo2 = item"
          :key="index">{{item}}</ui-tab-item>
      </ui-tab>
      <ui-swiper v-model="index" height="100px" :show-dots="false">
        <ui-swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper">{{item}} Container</div>
        </ui-swiper-item>
      </ui-swiper>
    </div>
    <ui-toast type="loading" :show="loading">加载中</ui-toast>
  </div>
</template>
<script>
const list = () => ['精选', '美食', '电影', '酒店', '外卖'];

export default {
  data() {
    return {
      index01: 0,
      list2: list(),
      demo2: '美食',
      list3: ['收到的消息', '发出的消息'],
      demo3: '收到的消息',
      list4: ['正在放映', '即将上映'],
      demo4: '即将上映',
      demoDisabled: 'A',
      loading: false,
      index: 0,
      getBarWidth: index => `${(index + 1) * 22}px`,
    };
  },
  methods: {
    switchTabItem(index) {
      console.log('on-before-index-change', index);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.index01 = index;
      }, 1000);
    },
    onItemClick(index) {
      console.log('on item click:', index);
    },
    addTab() {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1);
      }
    },
    removeTab() {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1);
      }
    },
    next() {
      if (this.index === this.list2.length - 1) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    },
    prev() {
      if (this.index === 0) {
        this.index = this.list2.length - 1;
      } else {
        this.index -= 1;
      }
    },
  },
};

</script>
<style scoped>
h3 {
  padding-top: 20px;
}

</style>

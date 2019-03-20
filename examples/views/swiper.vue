<template>
  <div>
    <div>
      <h3>list模式下，默认高度为180px</h3>
      <ui-button mini @click="demo01_index = 0">go to 0</ui-button>
      <ui-button mini @click="demo01_index = 1">go to 1</ui-button>
      <ui-button mini @click="demo01_index = 2">go to 2</ui-button>
      <ui-swiper
        :list="demo01_list"
        v-model="demo01_index"
        @on-index-change="demo01_onIndexChange"></ui-swiper>
    </div>
    <div>
      <h3>设置aspect-ratio, 将自动根据宽度计算高度</h3>
      <ui-swiper
        :list="demo02_list"
        :aspect-ratio=".5"
        style="width:85%;margin:0 auto;"
        dots-position="center"></ui-swiper>
    </div>
    <div>
      <h3>自动轮播</h3>
      <ui-swiper auto
        :list="demo03_list"
        style="width:80%;margin:0 auto;"
        height="180px"
        dots-class="custom-bottom"
        dots-position="center"></ui-swiper>
    </div>
    <div>
      <h3>use swiper-item for image list</h3>
      <ui-swiper :aspect-ratio=".5">
        <ui-swiper-item class="swiper-demo-img"
          v-for="(item, index) in demo04_list"
          :key="index">
          <img :src="item" height="100%" width="100%">
        </ui-swiper-item>
      </ui-swiper>
    </div>
    <div>
      <h3>set index = 1 with swiper-item</h3>
      <ui-button mini @click="swiperItemIndex = 0">go to 0</ui-button>
      <ui-button mini @click="swiperItemIndex = 1">go to 1</ui-button>
      <ui-button mini @click="swiperItemIndex = 2">go to 2</ui-button>
      <ui-swiper :aspect-ratio=".5"
        @on-index-change="onSwiperItemIndexChange"
        v-model="swiperItemIndex">
        <ui-swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
          <img :src="item" width="100%">
        </ui-swiper-item>
      </ui-swiper>
    </div>
    <div>
      <h3>Async setting list data</h3>
      <ui-button @click="demo05_onLoad(1)" mini>Load list1</ui-button>
      <ui-button @click="demo05_onLoad(2)" mini>Load list2</ui-button>
      <ui-swiper auto
        height="180px"
        :list="demo05_list"
        @on-index-change="demo05_onIndexChange"></ui-swiper>
    </div>
    <div>
      <h3>引入swiper-item自定义item内容，用height定义高度</h3>
      <ui-swiper auto height="100px">
        <ui-swiper-item class="black" v-for="i in 5" :key="i">
          <h2 class="title fadeInUp animated">获得{{i}}0金币</h2></ui-swiper-item>
      </ui-swiper>
    </div>
    <div>
      <h3>垂直方向文字滚动</h3>
      <ui-swiper auto
        height="30px"
        direction="vertical"
        class="text-scroll"
        :interval="2000"
        :show-dots="false">
        <ui-swiper-item v-for="i in 5" :key="i">
          <p>获得{{i}}0金币</p>
        </ui-swiper-item>
      </ui-swiper>
    </div>
    <div>
      <h3>循环模式</h3>
      <ui-swiper loop auto
        :list="demo06_list"
        :index="demo06_index"
        @on-index-change="demo06_onIndexChange"></ui-swiper>
    </div>
  </div>
</template>
<script>
const baseList = [{
  url: '',
  img: '//dummyimage.com/444',
  title: '444444',
}, {
  url: '',
  img: '//dummyimage.com/222',
  title: '222222',
}, {
  url: '',
  img: '//dummyimage.com/333',
  title: '333333',
  fallbackImg: '//dummyimage.com/444',
}];

const imgList = [
  '//dummyimage.com/555',
  '//dummyimage.com/666',
  '//dummyimage.com/777',
];

const urlList = baseList.map(item => ({
  url: '/',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: item.title,
}));

const demoList = imgList.map(one => ({
  url: '/',
  img: one,
}));

export default {
  methods: {
    onSwiperItemIndexChange(index) {
      console.log('demo item change', index);
    },
    demo01_onIndexChange(index) {
      this.demo01_index = index;
    },
    demo05_onIndexChange(index) {
      this.demo05_index = index;
    },
    demo05_onLoad(id) {
      this.demo05_list = id === 1 ? baseList : demoList;
    },
    demo06_onIndexChange(index) {
      this.demo06_index = index;
    },
  },
  data() {
    return {
      demo01_list: baseList,
      demo02_list: demoList,
      demo03_list: demoList,
      demo04_list: imgList,
      demo05_list: [],
      demo06_list: urlList,
      demo01_index: 0,
      demo02_index: 1,
      demo05_index: 0,
      demo06_index: 0,
      swiperItemIndex: 1,
    };
  },
};

</script>
<style scoped>
h3 {
  margin-top: 20px;
}

</style>

<template>
  <div>
    <ui-group>
      <ui-cell title="基本使用">
        <ui-switch v-model="show1"></ui-switch>
      </ui-cell>
      <ui-cell title="显示取消菜单">
        <ui-switch v-model="show2"></ui-switch>
      </ui-cell>
      <ui-cell title="显示提示文字">
        <ui-switch v-model="show3"></ui-switch>
      </ui-cell>
      <ui-cell title="点击遮罩区域不关闭">
        <ui-switch v-model="show4"></ui-switch>
      </ui-cell>
      <ui-cell title="使用数组定义菜单">
        <ui-switch v-model="show5"></ui-switch>
      </ui-cell>
      <ui-cell title="使用 header slot">
        <ui-switch v-model="show6"></ui-switch>
      </ui-cell>
      <ui-cell title="安卓风格">
        <ui-switch v-model="show7"></ui-switch>
      </ui-cell>
      <ui-cell title="不自动关闭">
        <ui-switch v-model="show8"></ui-switch>
      </ui-cell>
    </ui-group>
    <ui-actionsheet :show.sync="show1"
      :menus="menus1"
      @on-click-menu="click"
      @on-click-menu-menu1="menu1Click"></ui-actionsheet>
    <ui-actionsheet :show.sync="show2"
      :menus="menus2"
      @on-click-menu="click"
      show-cancel></ui-actionsheet>
    <ui-actionsheet :show.sync="show3"
      :menus="menus3"
      @on-click-menu="click"
      @on-click-menu-delete="onDelete"
      show-cancel>
    </ui-actionsheet>
    <ui-actionsheet :show.sync="show4"
      :menus="menus1"
      :close-on-clicking-mask="false"
      show-cancel
      @on-click-mask="console('on click mask')"></ui-actionsheet>
    <ui-actionsheet :show.sync="show5"
      :menus="menus5"
      @on-click-menu="click5"
      show-cancel></ui-actionsheet>
    <ui-actionsheet :show.sync="show6"
      :menus="menus1">
      <p slot="header" v-html="'ui-Actionsheet header'"></p>
    </ui-actionsheet>
    <ui-actionsheet :show.sync="show7"
      :menus="menus1"
      isAndroid
      @on-click-menu="click">
    </ui-actionsheet>
    <ui-actionsheet :show.sync="show8"
      :menus="menus1"
      @on-click-menu="demo8doClose"
      :close-on-clicking-mask="false"
      :close-on-clicking-menu="false">
    </ui-actionsheet>
    <ui-toast :show.sync="loading" type="loading">数据加载中</ui-toast>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      loading: false,
      showSuccess: false,
      menus1: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline',
      },
      menus2: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos',
      },
      menus3: {
        'title.noop': 'Actionsheet header',
        delete: '<span style="color:red">Delete</span>',
      },
      menus5: [{
        label: 'Actionsheet header',
        type: 'info',
      }, {
        label: 'PrimaryLabel',
        type: 'primary',
        value: 'primaryValue',
        otherProp: 'hey',
      }, {
        label: 'Warn',
        type: 'warn',
      }, {
        label: 'Disabled',
        type: 'disabled',
      }, {
        label: 'Default',
      }],
    };
  },
  methods: {
    demo8doClose() {
      this.loading = true;
      setTimeout(() => {
        this.show8 = false;
        this.loading = false;
      }, 1000);
    },
    console() {},
    menu1Click() {
      console.log('menu1 click');
    },
    click(key, value) {
      console.log(key, value);
    },
    click5(value, item) {
      console.log(value, item);
    },
    onDelete() {
      this.showSuccess = true;
    },
  },
};

</script>

<template>
  <div>
    <ui-group>
      <ui-cell title="My Account" value="Protected" @click.native="onClick"></ui-cell>
      <ui-cell title="Money" @click.native="onClick" :is-loading="!money" :value="money"></ui-cell>
      <ui-cell title="Withdraw" disabled is-link></ui-cell>
    </ui-group>
    <ui-group title="Use is-link to show arrow">
      <ui-cell is-link>
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">Messages</span>
        <ui-badge value="1"></ui-badge>
        </span>
      </ui-cell>
      <ui-cell title="Notifications" is-link></ui-cell>
      <ui-cell title="Privacy" is-link></ui-cell>
      <ui-cell title="General" is-link>
        <img slot="icon" width="20" src="//dummyimage.com/20">
      </ui-cell>
    </ui-group>
    <ui-group label-width="5em" title="Align-items">
      <ui-cell primary="content"
        title="default"
        value="long long long longlong
        longlong longlong longlong longlong
        longlong longlong longlong long">
      </ui-cell>
      <ui-cell title="flex-start"
        align-items="flex-start"
        value="long long long longlong
        longlong longlong longlong longlong
        longlong longlong longlong long">
      </ui-cell>
    </ui-group>
    <ui-group title="Collapse">
      <ui-cell title="Title 001"
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"></ui-cell>
      <template v-if="showContent001">
        <ui-cell :border-intent="false" title="content 001" is-link class="sub-item"></ui-cell>
        <ui-cell title="content 001" is-link class="sub-item"></ui-cell>
        <ui-cell title="content 001" is-link class="sub-item"></ui-cell>
      </template>
      <ui-cell title="Animated"
        is-link
        :border-intent="false"
        :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="showContent002 = !showContent002"></ui-cell>
      <p class="slide" :class="showContent002?'animate':''">
        <table width="100%" align="center">
          <tr v-for="item in list" :key="item.id">
            <td>{{item.label}}</td>
            <td>{{item.value}}</td>
          </tr>
        </table>
      </p>
    </ui-group>
    <ui-group title="Use slot for complicated content">
      <ui-cell title="Slot content">
        <div>
          <span style="color: green">hello world</span>
        </div>
      </ui-cell>
    </ui-group>
    <ui-group title="is-link is set to true automatically when link exists">
      <ui-cell title="Go to Radio Demo" link="/radio" inline-desc="/radio"></ui-cell>
      <ui-cell title="Go to Msg" :link="{path:'/msg'}" inline-desc="{path:'/msg'}"></ui-cell>
      <ui-cell title="Http link" link="https://baidu.com" inline-desc="https://baidu.com"></ui-cell>
    </ui-group>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.money = -1024;
    }, 2000);
  },
  methods: {
    onClick() {},
  },
  data() {
    return {
      list: [{
        label: 'Apple',
        value: '3.29',
      }, {
        label: 'Banana',
        value: '1.04',
      }, {
        label: 'Fish',
        value: '8.00',
      }],
      money: null,
      showContent001: false,
      showContent002: false,
    };
  },
};

</script>
<style scoped>
.sub-item {
  color: #888;
}

.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}

.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}

</style>

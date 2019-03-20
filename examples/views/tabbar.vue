<template>
  <ui-tabbar>
    <ui-tabbar-item>
      <ui-badge :value="100" :max="99"></ui-badge>
      <img slot="icon" src="//dummyimage.com/80">
      <span slot="label">微信</span>
    </ui-tabbar-item>
    <ui-tabbar-item selected>
      <img slot="icon" src="//dummyimage.com/80">
      <span slot="label">通讯录</span>
    </ui-tabbar-item>
    <ui-tabbar-item>
      <ui-badge :is-dot="true"></ui-badge>
      <img slot="icon" src="//dummyimage.com/80">
      <span slot="label">发现</span>
    </ui-tabbar-item>
    <ui-tabbar-item link="/">
      <ui-badge value="new"></ui-badge>
      <img slot="icon" src="//dummyimage.com/80">
      <span slot="label">我</span>
    </ui-tabbar-item>
  </ui-tabbar>
</template>

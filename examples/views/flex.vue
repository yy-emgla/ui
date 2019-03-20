<template>
  <div class="flex">
    <ui-flex justify="center" :gutter="10">
        <ui-flex-item><span>flexbox</span></ui-flex-item>
        <ui-flex-item><span>flexbox</span></ui-flex-item>
    </ui-flex>

    <ui-flex justify="space-between" :gutter="10">
        <ui-flex-item><span>flexbox</span></ui-flex-item>
        <ui-flex-item><span>flexbox</span></ui-flex-item>
        <ui-flex-item><span>flexbox</span></ui-flex-item>
    </ui-flex>

    <ui-flex wrap="wrap" :gutter="10">
        <div>box</div>
        <ui-flex-item><span>flexbox</span></ui-flex-item>
    </ui-flex>

    <ui-flex align="stretch" :gutter="10">
        <div>box</div>
        <ui-flex-item><span>flexbox</span></ui-flex-item>
        <div>box</div>
    </ui-flex>
  </div>
</template>
<style lang="postcss" scoped>
.flex {
  padding: 1em;
  background-color: white;
}
.ui-flex-row {
  margin-top: 1em;
  width: auto;
  border: 1px #eee solid;
  padding: 8px;
  text-align: center;
  div {
    padding: 0 1em;
    font-size: .5em;
    line-height: 3em;
    background-color: #aaa;
  }
  .weui-flex__item {
    background-color: #ddd;
    & + div {
      margin-left: 10px;
    }
  }
}
</style>


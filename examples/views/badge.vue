<template>
  <div>
    <ui-group title="新消息提示跟摘要信息后，统一在列表右侧">
      <ui-cell title="单行列表" is-link>
        <span> 详细信息 </span>
        <!-- <ui-badge text="dot"></ui-badge> -->
        <ui-badge is-dot></ui-badge>
      </ui-cell>
    </ui-group>
    <ui-group title="未读数红点跟在主题信息后，统一在列表左侧">
      <ui-cell title="联系人名称" inline-desc="摘要信息">
        <summary slot="icon">
          <img src="//dummyimage.com/160" width="50" />
          <ui-badge :value="8"></ui-badge>
        </summary>
      </ui-cell>
    </ui-group>
    <ui-group>
      <ui-cell>
        <span slot="title">
          <span> 单行列表 </span>
          <ui-badge :value="100" :max="99"></ui-badge>
        </span>
      </ui-cell>
      <ui-cell is-link>
        <span slot="title">
          <span> 单行列表 </span>
          <ui-badge :value="8"></ui-badge>
        </span>
        详细信息
      </ui-cell>
      <ui-cell is-link>
        <span slot="title">
          <span> 单行列表 </span>
          <ui-badge value="new"></ui-badge>
        </span>
      </ui-cell>
    </ui-group>
  </div>
</template>
<style scoped>
summary {
  position: relative;
  margin-right: 10px;
}

summary span {
  position: absolute;
  top: -.4em;
  right: -.4em;
}
</style>

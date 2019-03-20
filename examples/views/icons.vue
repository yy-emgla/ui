<template>
  <div>
    <ui-flex>
      <ui-icon type="success" msg></ui-icon>
      <ui-flex-item>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">成功</h3>
          <p class="icon-box__desc">用于表示操作顺利达成</p>
        </div>
      </ui-flex-item>
    </ui-flex>
    <ui-flex>
      <ui-icon type="info" msg></ui-icon>
      <ui-flex-item>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">提示</h3>
          <p class="icon-box__desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</p>
        </div>
      </ui-flex-item>
    </ui-flex>
    <ui-flex>
      <ui-icon type="warn" msg="primary"></ui-icon>
      <ui-flex-item>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">普通警告</h3>
          <p class="icon-box__desc">用于表示操作后将引起一定后果的情况</p>
        </div>
      </ui-flex-item>
    </ui-flex>
    <ui-flex>
      <ui-icon type="warn" msg></ui-icon>
      <ui-flex-item>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">强烈警告</h3>
          <p class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</p>
        </div>
      </ui-flex-item>
    </ui-flex>
    <ui-flex>
      <ui-icon type="waiting" msg></ui-icon>
      <ui-flex-item>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">等待</h3>
          <p class="icon-box__desc">用于表示等待</p>
        </div>
      </ui-flex-item>
    </ui-flex>
    <div class="icon_sp_area">
      <ui-icon type></ui-icon>
      <ui-icon type="success"></ui-icon>
      <ui-icon type="success-no-circle"></ui-icon>
      <ui-icon type="circle"></ui-icon>
      <ui-icon type="warn"></ui-icon>
      <ui-icon type="download"></ui-icon>
      <ui-icon type="info-circle"></ui-icon>
      <ui-icon type="cancel"></ui-icon>
      <ui-icon type="search"></ui-icon>
    </div>
  </div>
</template>
<style scoped>
.content {
  padding: 20px 40px;
}

.ui-flex-row {
  margin-bottom: 25px;
}

.ui-flex-row i {
  margin-right: 18px;
}

.icon-box__title {
  font-weight: normal;
}

.icon-box__desc {
  margin-top: 6px;
  font-size: 12px;
  color: #888;
}
</style>

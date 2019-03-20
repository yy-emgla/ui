<template>
  <transition name="ui-fade">
    <div class="weui-gallery" v-show="show" @click="$emit('update:show', false)">
      <span class="weui-gallery__img" :style="`background-image: url(${url})`"></span>
      <div class="weui-gallery__opr">
        <a class="weui-gallery__del" @click.prevent.stop="$emit('delete')">
          <i class="weui-icon-delete weui-icon_gallery-delete"></i>
        </a>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'UiGallery',
  props: {
    show: Boolean,
    url: String,
    onDelete: Function,
  },
};
</script>

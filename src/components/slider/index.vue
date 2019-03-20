<template>
  <div class="weui-slider-box" :disabled="disabled">
    <div class="weui-slider">
      <div class="weui-slider__inner" :style="{height: lineViewHeight}">
        <div :style="{width: `${progress}%`,
        height: lineViewHeight, 'background-color': backColor}" class="weui-slider__track"></div>
        <div :style="{left: `${progress}%`}" class="weui-slider__handler">
          <slot name="handle"></slot>
        </div>
      </div>
    </div>
    <div class="weui-slider-box__value" v-show="showValue">{{currentValue}}</div>
  </div>
</template>
<script>
import draggable from './draggable';

export default {
  name: 'UiSlider',
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
    },
    lineWidth: [String, Number],
    backColor: String,
    showValue: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    currentValue() {
      let value = this.value || 0;
      value = value > this.max ? this.max : value;
      value = value < this.min ? this.max : value;
      return value;
    },
    progress() {
      return Math.floor(((this.currentValue - this.min) / (this.max - this.min)) * 100);
    },
    lineViewHeight() {
      return isNaN(this.lineWidth) ? this.lineWidth : `${this.lineWidth}px`;
    },
  },

  mounted() {
    const thumb = this.$el.querySelector('.weui-slider__handler');
    const content = this.$el.querySelector('.weui-slider__inner');

    const getThumbPosition = () => {
      const contentBox = content.getBoundingClientRect();
      const thumbBox = thumb.getBoundingClientRect();
      return {
        left: thumbBox.left - contentBox.left,
        top: thumbBox.top - contentBox.top,
        thumbBoxLeft: thumbBox.left,
      };
    };

    let dragState = {};
    draggable(thumb, {
      start: (event) => {
        if (this.disabled) return;
        const position = getThumbPosition();
        const thumbClickDetalX = event.clientX - position.thumbBoxLeft;
        dragState = {
          thumbStartLeft: position.left,
          thumbStartTop: position.top,
          thumbClickDetalX,
        };
      },
      drag: (event) => {
        if (this.disabled) return;
        const contentBox = content.getBoundingClientRect();
        const deltaX = event.pageX
          - contentBox.left
          - dragState.thumbStartLeft;
          // - dragState.thumbClickDetalX;
        const newLeft = dragState.thumbStartLeft + deltaX;
        const step = (this.max - this.min) / this.step;
        const oneNodeLength = contentBox.width / step;

        const re = newLeft % oneNodeLength;
        const newPosition =
          (newLeft
          - re) + (re > (oneNodeLength / 2) ? oneNodeLength : 0);

        let newProgress = newPosition / contentBox.width;

        if (newProgress < 0) {
          newProgress = 0;
        } else if (newProgress > 1) {
          newProgress = 1;
        }

        this.$emit('input', Math.round(this.min
          + (newProgress
            * (this.max - this.min))));
      },
      end: () => {
        if (this.disabled) return;
        this.$emit('change', this.value);
        dragState = {};
      },
    });
  },
};
</script>

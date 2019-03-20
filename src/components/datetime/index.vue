<template>
  <div clas="ui-datetime">
    <render :value="pickerValue" @on-change="datechange" ref="render"
               :data='data' :show.sync="currentShow"></render>
  </div>
</template>

<script>
import timeTool from './time';
import render from './render';

export default {
  name: 'ui-datetime',
  components: {
    render,
  },
  props: {
    type: {
      type: String,
      default: 'date',
    },
    value: {
      type: [String, Date],
      default: () => new Date(),
      validator: (value) => {
        if (!!value && typeof value === 'string') {
          return new Date(value).getDate() === value.substring(value.length - 2);
        }
        return true;
      },
    },
    show: Boolean,
    min: Date,
    max: Date,
  },
  data() {
    return {
      currentValue: new Date(),
      data: [[], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], []],
      year: '',
      month: '',
      day: '',
      isLeapYear: false,
      monthConfig: {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
      },
      currentShow: this.show,
    };
  },
  created() {
    this.currentValue = this.value ? new Date(this.value) : this.currentValue;
    const year = this.currentValue.getFullYear();
    const month = this.currentValue.getMonth() + 1;
    const yearStr = [];
    for (let i = year - 30; i < year + 29; i += 1) {
      yearStr.push(i);
    }
    const days = this.setDayForMonth(month).slice(0);
    this.$set(this.data, 0, yearStr);
    this.$set(this.data, 2, days);
    this.$nextTick(() => {
      this.changeDate2Arr(this.currentValue);
    });
  },
  methods: {
    changeDate2Arr(date) { // typeof date === Date
      [this.year, this.month, this.day] =
        [date.getFullYear().toString(),
          (date.getMonth() + 1).toString(),
          (date.getDate()).toString()];
    },
    datechange(val) {
      if (!this.equals(val, this.currentValue)) {
        const date = val.slice(0);
        const newMonth = date[1];
        const newYear = date[0];
        this.monthConfig[2] = (timeTool.isleapyear(newYear) ? 29 : 28);
        const len = this.monthConfig[newMonth];
        if (len < this.data[2].length
          && this.day > len) {
          [this.year, this.month, this.day] = [val[0], val[1], len]; // if overflow
          this.currentValue = new Date(this.year, this.month - 1, len);
        } else {
          [this.year, this.month, this.day] = val;
          this.currentValue = new Date(this.year, this.month - 1, this.day);
        }
        this.$emit('on-change', this.currentValue);
        this.$emit('input', this.currentValue);
      }
    },
    setDayForMonth(month) {
      const dayStr = [];
      for (let i = 1; i <= this.monthConfig[month]; i += 1) {
        dayStr.push(i);
      }
      return dayStr;
    },
    equals(val, eqaleVal) {
      return eqaleVal && eqaleVal.getFullYear().toString() === val[0]
        && (eqaleVal.getMonth() + 1).toString() === val[1]
        && eqaleVal.getDate().toString() === val[2];
    },
  },
  computed: {
    pickerValue() {
      return [this.year, this.month, this.day];
    },
  },
  mounted() {
  },
  watch: {
    value(val) {
      this.currentValue = new Date(val);
    },
    currentValue(val) {
      [this.year, this.month, this.day] = [val.getFullYear().toString(),
        (val.getMonth() + 1).toString(), val.getDate().toString()];
    },
    year(val, oldVal) {
      if (val !== oldVal) {
        this.isLeapYear = timeTool.isleapyear(val);
      }
    },
    month(val, old) {
      const newMonth = this.setDayForMonth(val);
      const len = newMonth.length;
      if (len < this.data[2].length && this.day > len) {
        this.day = newMonth[newMonth.length - 1];
      }
      val !== old &&
      this.$set(this.data, 2, this.setDayForMonth(val));
    },
    isLeapYear(val) { // 闰年
      this.monthConfig[2] = (val ? 29 : 28);
      this.$set(this.data, 2, this.setDayForMonth(this.month));
    },
    currentShow(val) {
      this.$emit('update:show', val);
    },
    show(val) {
      this.currentShow = val;
    },
  },
};
</script>


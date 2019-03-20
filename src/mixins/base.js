function createId() {
  return Math.random().toString(36).substring(3, 8);
}

export default {
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.handleChangeEvent = false;
  },
  computed: {
    dirty: {
      get: () => !this.pristine,
      set: (newValue) => {
        this.pristine = !newValue;
      },
    },
    invalid() {
      return !this.valid;
    },
  },
  methods: {
    setTouched() {
      this.touched = true;
    },
  },
  watch: {
    value(newVal) {
      if (this.pristine === true) {
        this.pristine = false;
      }
      if (!this.handleChangeEvent) {
        this.$emit('on-change', newVal);
        this.$emit('input', newVal);
      }
    },
  },
  data() {
    return {
      errors: {},
      pristine: true,
      touched: false,
      uuid: createId(),
    };
  },
};

<template>
  <div>
    <input
      type="text"
      :disabled="disabled"
      :value="currentValue"
      @input="handleChange"
      @blur="handleBlur"
    />
  </div>
</template>
<script>

import Emitter from 'view-design/src/mixins/emitter'

export default {
  name: "byInput",
  mixins: [Emitter],
  props: ["value", "disabled"],
  // props: {
  //   record: {
  //     type: Object,
  //     require: true
  //   },
  //   value: {
  //     type: String,
  //     default: ''
  //   }
  // },
   data () {
      return {
          currentValue: this.value,
      };
  },
  methods: {
    handleChange(e) {
      this.currentValue = e.target.value
      // 使用 onChange 事件修改值
      this.$emit("input", e.target.value);
    },
    handleBlur (event) { //用于校验表单
        //this.$emit('on-blur', event);
        this.dispatch('FormItem', 'on-form-blur', this.currentValue);
    },
  },
  mounted() {
  }
};
</script>

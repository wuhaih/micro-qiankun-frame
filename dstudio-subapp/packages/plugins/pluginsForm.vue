<template>
  <div class="plugin-form">
      <span>我是插件1</span>
  </div>
</template>
<script>
export default {
  name: "pluginsForm",
  props: {
    src: {
      default: "",
      type: String
    }
  },
  data: function() {
    return {
    };
  },
  mounted: function() {
    
  },
  methods: {
    go: function() {
      if (this.href) {
        window.location.href = this.href;
      }
    }
  }
};
</script>

<style >
.plugin-form{
  width:100%;
  height:50px;
  background:red;
  color: black;
}
</style>
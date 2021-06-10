<template>
  <div class="plugin-demo">
     <span>我是插件2</span>
  </div>
</template>
<script>
export default {
  name: "pluginDemo",
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
.plugin-demo{
  width:100%;
  height:50px;
  background:black;
  color: red;
}
</style>
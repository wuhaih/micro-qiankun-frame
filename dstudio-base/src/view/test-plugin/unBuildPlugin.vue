
<template>
  <div class="plugins-loading">
    <span>测试插件</span>
    <Button type="primary" @click="loadAsynPlugin">测试异步加载插件</Button>

    <component :is="pluginName"></component>
    <!-- <component :is="plugin" v-for="(plugin. index) in plugins" :key=index></component>  -->
  </div>
</template>
<script>
import Axios from "axios";

export default {
  data() {
    return {
      pluginName: "",
      plugin: "pluginsForm",
    };
  },
  mounted() {
    this.registerPlugin();
  },
  methods: {
    loadAsynPlugin(){
        this.pluginName = this.plugin
    },
    /**
     * 异步请求加载插件
     */
    registerPlugin() {
    //   window.Vue.component(this.plugin, (resolve, reject) => {
    //     this.loadScript(`/packages/plugins.js`)
    //       .then(() => {
    //           debugger
    //         resolve(window.modules[this.plugin]);
    //       })
    //       .catch((e) => {
    //         reject(e);
    //       });
    //   });

        this.plugin = ()=>import('@p/plugins.js')
        this.pluginName = this.plugin
        debugger
    },
    loadScript(url) {
      return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        debugger
        if (script.readyState) {
          // 兼容IE的script加载事件
          script.onreadystatechange = function () {
            // loaded ： 下载完毕 complete： 数据准备完毕。这两个状态ie可能同时出现或者只出现一个
            if (script.readyState === "loaded" || script.readyState === "complete") {
              // 防止加载两次
              script.onreadystatechange = null;
              resolve();
            }
          };
        } else {
          script.onload = function () {
            //console.log('complete')
            resolve();
          };
          script.onerror = function (e) {
            //console.log('complete')
            reject(e);
          };
        }
        script.src = url;
        // document.head.appendChild(script)
        document.getElementsByTagName("body")[0].appendChild(script);
      });
    },
  },
};
</script>

<style>
.plugins-loading {
  background: #efefef;
  width: 100%;
  height: 100%;
}
</style>

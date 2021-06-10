
<template>
    <div class="plugins-loading">
        <span>测试插件</span>
        <component :is="plugin" ></component>
        <!-- <component :is="plugin" v-for="(plugin. index) in plugins" :key=index></component>  -->
    </div>
</template>
<script>
    import Axios from 'axios'
    import Vue from 'vue';

    export default {
        data () {
            return {
                plugin:''
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            async init(){
                debugger
                //以下通过import导入文件和上面远程加载JS文件执行的效果是一致的
                this.plugin = ()=>import('../../packages/plugins/pluginsForm.vue')

                //this.plugin = ()=>import('http://localhost:8181/static/plugins/pluginsForm.js'  //失败
                //this.plugin = () => resolve => { require(['../../packages/plugins/pluginsForm.vue'], resolve) }//失败 
                
                // const loadCmp = Vue.component('pluginsForm', function (resolve,reject) { //成功
                //     setTimeout(function () {
                //         // 这个特殊的 `require` 语法将会告诉 webpack
                //         // 自动将你的构建代码切割成多个包，这些包
                //         // 会通过 Ajax 请求加载
                //         require(['../../packages/plugins/pluginsForm.vue'], resolve)

                //         //http://localhost:8080/static/plugins/pluginsForm.js
                //     }, 300);
                // });
                // this.plugin = loadCmp

                console.log('-----this.plugin:-----', this.plugin)
            }
        }
    }
</script>

<style>
    .plugins-loading{
        background: #efefef;
        width: 100%;
        height: 100%;

    }
</style>

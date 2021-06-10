
<template>
    <div class="plugins-loading">
        <span>测试插件</span>
        <component :is="plugin" ></component>
        <!-- <component :is="plugin" v-for="(plugin. index) in plugins" :key=index></component>  -->
    </div>
</template>
<script>
    import Axios from 'axios'

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
                // ajax获取js，并执行js
                //let url = 'static/plugins/pluginDemo.js'
                let url = 'static/plugins/pluginsForm.js'
                //let url = 'static/lib/plugins.js'
                // 缓存JS文件
                if(!window._pluginCache){
                    window._pluginCache = {}
                }
                
                if(!window._pluginCache[url]){
                    window._pluginCache[url] = await Axios.get(url)
                }
                // debugger
                let res = window._pluginCache[url]
                console.log('res', res)

                let _vdom = new Function(`return ${res.data}`)()
                console.log('_vdom', _vdom)

                if(_vdom.__esModule){ // esmoudule
                    this.plugin = _vdom.default
                }else{
                    this.plugin = _vdom
                }
                
                console.log('this.plugin', this.plugin)
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

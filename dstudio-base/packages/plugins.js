import pluginsForm from './plugins/pluginsForm.vue' //插件1
import pluginDemo from './plugins/pluginDemo.vue' //插件2

const plugins = {
  install: function (Vue) {
    Vue.component(pluginsForm.name, pluginsForm)
    Vue.component(pluginDemo.name, pluginDemo)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.modules = {
     'pluginsForm':pluginsForm,
     'pluginDemo': pluginDemo
  }
  window.Vue.use(plugins)
}

export default plugins

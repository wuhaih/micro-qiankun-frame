import Vue from 'vue';
import App from './App'
import router from './router'
import axios from 'axios'


Vue.prototype.$axios = axios
window.Vue = Vue

//test jsx support
// const testJsx = Vue.extend({
//     render(h){
//         return <div>wuhaihao</div>
//     }
// })
// import CompTest from './components/component-test'


// new Vue({
//     el:'#app',
//     components:{CompTest},
//     render(h){
//         return h('div',[
//             h(testJsx),
//             h(CompTest)
//         ]);
//     }
// })


// new Vue({
//     el: '#app',
//     router,
//     components: { App },
//     template: '<App/>'
// })


let instance = null;
function render(props = {}) {
    debugger
  // instance = new Vue({
  //   router,
  //   render: (h) => h(App),
  // }).$mount('#app');

  instance = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
}
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
debugger
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  debugger
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}

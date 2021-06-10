import Vue from "vue";

declare module "*.vue" {
  export default Vue;
}

// 在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $axios: any
  }
}

declare module 'view-design/src/locale/long/en-US'
declare module 'view-design/src/locale/long/zh-CN'
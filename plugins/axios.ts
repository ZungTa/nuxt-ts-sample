import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $axios: NuxtAxiosInstance
  }
}

const AxiosPlugin: Plugin = (context, inject) => {
  inject('axios', context.$axios)
}

export default AxiosPlugin
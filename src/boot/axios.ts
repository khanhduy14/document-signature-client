import "@babel/polyfill";
import axios, { AxiosStatic } from 'axios';

export default ({ app, store, Vue, router }: any) => {

  const httpService = axios.create({
    baseURL: `${process.env.API}`,
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // charset: 'UTF-8',
    },
    timeout: 10 * 1000
  })

  const requestInterceptor = (config:any) => {
    const isAuthPages = ['/auth'].indexOf(config.url) > -1
    const jwt = store.state.users.jwt || document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (jwt && !isAuthPages) {
      config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
  }

  const responseInterceptor = (response:any) => {
    return response
  }

  const authErrorInterceptor = async (error:any) => {
    switch (error.response.status) {
      case 403:
        throw error
      case 404:
        throw error
      default:
        break
    }
    return Promise.reject(error)
  }

  httpService.interceptors.request.use(requestInterceptor)
  httpService.interceptors.response.use(responseInterceptor, authErrorInterceptor)

  Vue.prototype.$axios = httpService;
}
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}

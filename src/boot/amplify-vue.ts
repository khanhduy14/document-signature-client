import Amplify, * as AmplifyModules from 'aws-amplify'
import AwsExports from '../aws-exports'
import {
  AmplifyPlugin,
  AmplifyEventBus
} from 'aws-amplify-vue'
import * as gqlQueries from '../graphql/queries'
import * as gqlMutations from '../graphql/mutations'
import * as gqlSubscriptions from '../graphql/subscriptions'

var urlsIn = AwsExports.oauth.redirectSignIn.split(",");
var urlsOut = AwsExports.oauth.redirectSignOut.split(",");


const oauth = {
  domain: AwsExports.oauth.domain,
  scope: AwsExports.oauth.scope,
  redirectSignIn: AwsExports.oauth.redirectSignIn,
  redirectSignOut: AwsExports.oauth.redirectSignOut,
  responseType: AwsExports.oauth.responseType
};
var hasLocalhost  = (hostname: any) => Boolean(hostname.match(/localhost/) || hostname.match(/127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/));
var hasHostname   = (hostname: any) => Boolean(hostname.includes(window.location.hostname));
var isLocalhost   = hasLocalhost(window.location.hostname);
if (isLocalhost) {
  urlsIn.forEach((e) =>   { if (hasLocalhost(e)) { oauth.redirectSignIn = e; }});
  urlsOut.forEach((e) =>  { if (hasLocalhost(e)) { oauth.redirectSignOut = e; }});
}
else {
  urlsIn.forEach((e) =>   { if (hasHostname(e)) { oauth.redirectSignIn = e; }});
  urlsOut.forEach((e) =>  { if (hasHostname(e)) { oauth.redirectSignOut = e; }});
}
var configUpdate = AwsExports;
configUpdate.oauth = oauth;
Amplify.configure(configUpdate);

async function bootAuthProcess(router : any ,store: any,Vue: any){
  await Vue.prototype.$Auth.currentAuthenticatedUser().then(async (user: any) => {

  }).catch((err: any) => {
    console.log('not authenticated');
  });
}

export default async ({router, store, Vue} : any) => {
  console.log('12312312')
  Vue.use(AmplifyPlugin, AmplifyModules)
  Vue.prototype.$Amplify = Amplify
  Vue.prototype.$AmplifyEventBus = AmplifyEventBus
  Vue.prototype.$Auth = AmplifyModules.Auth
  Vue.prototype.$API = AmplifyModules.API
  Vue.prototype.$gqlOperation = AmplifyModules.graphqlOperation
  Vue.prototype.$gqlQueries = gqlQueries
  Vue.prototype.$gqlMutations = gqlMutations
  Vue.prototype.$gqlSubscriptions = gqlSubscriptions
  Vue.prototype.$UserSession = null
  // Vue.prototype.$rootApp = router.apps.$root.$children[0] // for loading function

  AmplifyModules.Hub.listen('auth', async ({ payload: { event, data } }) => {
    switch (event) {
      case 'signIn':
        console.log('signIn')
        await bootAuthProcess(router,store,Vue)

        if(store.getters['users/isAdmin']){
          router.push('/admin/home');
        } else {
          router.push('/user');
        }

        break;
      case 'signOut':
        Vue.prototype.$UserSession = null
        router.push({ path: '/' })
        console.log('signOut')
        break;
      case 'customOAuthState':
        console.log('customOAuthState')
    }
  });

  await bootAuthProcess(router,store,Vue)


  router.beforeResolve((to: any, from: any, next: any) => {
    // Auth Pages
    if (to.path.indexOf('/auth') > -1) {
      console.log('[Guard] Auth page.') // eslint-disable-line no-console
      next()
      return
    }
    // Need Login Pages
    else if (to.matched.some((record : any) => record.meta.requiresAuth)) {
      Vue.prototype.$Auth.currentAuthenticatedUser().then(async (data:any) => {
        Vue.prototype.$UserSession = data
        if (data && data.signInUserSession) {
          console.log('[Guard] User is logged in.') // eslint-disable-line no-console

          const isAdmin = store.getters['users/isAdmin']
          let isAdminPage = false

          if (to.path.indexOf('/admin') > -1) {
            isAdminPage = true
          }

          if(!isAdmin && isAdminPage){
            router.push('/user')
          } else if(isAdmin && !isAdminPage){
            router.push('/admin/home')
          } else {
            next()
            return
          }

        } else {
          Vue.prototype.$UserSession = null
          const vm = new Vue()
          console.log('Reject the path')
          await vm.$Auth.signOut()
          next({
            path: '/auth/login'
          })
          return
        }
        next()
        return
      }).catch((e: any) => {
        Vue.prototype.$UserSession = null
        console.log('[Guard] User is not logged in.', e) // eslint-disable-line no-console
        next({
          path: '/auth/login'
        })
        return
      })
    } else {
      // Guest Pages
      Vue.prototype.$Auth.currentAuthenticatedUser().then(async (data: any) => {
        Vue.prototype.$UserSession = data
        console.log('[Guard] User is logged in.') // eslint-disable-line no-console
        const isAdmin = store.getters['users/isAdmin']

        if(isAdmin){
          router.push('/admin/home')
        } else {
          router.push('/user')
        }

      }).catch(() => {
        console.log('[Guard] Guest User.') // eslint-disable-line no-console
        next()
        return
      })
    }
  })
  router.afterEach((to: any, from: any, next: any) => {
  })
}

declare module 'vue/types/vue' {
  interface Vue {
    $Amplify: any;
    $AmplifyEventBus: any;
    $Auth: any;
    $API: any;
    $UserSession: any;
    $gqlOperation: any;
    $gqlQueries: any;
    $gqlMutations: any;
    $gqlSubscriptions: any;
    $gqlCustomQueries: any;
  }
}


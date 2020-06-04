import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue')},
      { path: 'main-board', component: () => import('pages/MainBoardPage.vue')}
    ]
  },

  {
    path: '/auth',
    component: () => import('layouts/NoDrawer.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Authentication.vue') ,
        children: [
          {
            path: 'login',
            component: () => import('components/authentication/Login.vue'),
            meta: { title: 'ログインページ', description: 'ログインを行います' }
          },
          {
            path: 'register',
            component: () => import('components/authentication/Register.vue'),
            meta: { title: 'ユーザー登録', description: 'ユーザー登録を行います' }
          },
          {
            path: 'forgot-password',
            component: () => import('components/authentication/ForgotPasswordSendMail.vue'),
            meta: { title: 'パスワード変更', description: 'パスワード変更を行います' }
          },
          {
            path: 'forgot-password/:username',
            component: () => import('components/authentication/ForgotPasswordVerification.vue'),
            meta: { title: 'パスワード復旧', description: 'パスワードをお忘れになった方へ' }
          }
        ]
      }
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

<template>
  <div class="login column col-grow q-pa-md">
    <h1 class="login__title text-h3 text-center q-mt-xl">agmiru JSI</h1>
    <p class="text-h7 text-center text-grey-7 q-mt-md q-mb-xl">ご希望のエリアの衛星画像を撮影、購入しましょう</p>
    <div class="login__container col-grow">

      <q-form @submit.prevent="submitForm">
        <div class="row">
          <q-input
            ref="username"
            v-model="username"
            label="ユーザー名"
            class="col"
            color="grey-10"
            type="email"
            :rules="[val => !!val.trim() || '認証が必要です' , isValidEmail ]"
          />
        </div>
        <div class="row">
          <q-input
            ref="password"
            v-model="password"
            label="パスワード"
            class="col"
            color="grey-10 q-mb-lg"
            type="password"
            :rules="[val => !!val || '認証が必要です']"
          />
        </div>
        <div class="login__row row q-mb-xl">
          <q-checkbox
            v-model="isRememberMe"
            color="grey-10"
            label="認証情報を保存する"
          />
          <q-space/>
          <q-btn
            to="/auth/forgot-password"
            flat
            size="sm"
            text-color="grey-8"
            label="パスワードをお忘れですか？"
          />
        </div>
        <div class="login__row row q-mb-xl q-mt-md">
          <q-btn
            label="ログイン"
            :loading="isLoading"
            color="grey-10 btn-login-with"
            dark
            unelevated
            @click="submitForm"
          />
          <q-space/>
          <q-btn
            label="ユーザー登録"
            to="/auth/register"
            outline
            color="grey-10 btn-login-with"
            unelevated
          />
        </div>
      </q-form>
      <div class="row justify-center q-mb-sm">
        <q-btn
          label="Googleアカウントでログイン"
          icon="account_box"
          color="red-10 btn-social-with"
          unelevated
          :loading="isLoading"
          :rounded="false"
          @click="loginWithAuthProvidor()"
        />
      </div>
    </div>

  </div>
</template>

<script>
  import StringUtils from '../../utils/StringUtils'

  export default {
    name: 'Login',
    data () {
      return {
        username : '',
        password : '',
        isRememberMe : false,

        isLoading : false,
        selectedRoleIndex: null
      }
    },

    methods : {
      async submitForm () {
        this.isLoading = true ;
        const self = this;
        try {
          this.loginUserWithEmail(this.username, this.password)
            .then(async (res) => {
              self.$store.commit('users/jwtUpdate', res.jwt)
              // self.$store.commit('users/usernameUpdate', res.payload)
              if (!this.isRememberMe) {
                document.cookie = `jwt=${res.jwt}; max-age=${60*60*12}` //12Hour
              } else {
                document.cookie = `jwt=${res.jwt}; max-age=${60*60*24*7}` //1Week
              }
            }).then(() => {
            // self.$store.dispatch({
            //   type: 'users/getNotificationList'
            // });
            // self.$store.dispatch({
            //   type: 'users/getUserAvatar'
            // });
          })
            .catch((e)=>{
              if (e.message === 'User does not exist.') {
                this.$notify('error', 'ユーザー名またはパスワードが正しくありません')
              } else if (e.message === 'Incorrect username or password.') {
                this.$notify('error', 'ユーザー名またはパスワードが正しくありません')
              } else if (e.code == 'UserNotConfirmedException'){
                this.$notify('error', 'ユーザー確認が完了していません')
              } else {
                this.$notify('error', 'ログインが失敗しました')
              }
              console.log('Login error', e.message)
            })
        } finally {
          this.isLoading = false
        }
      },

      async loginWithAuthProvidor() {

      },

      isValidEmail (val) {
        return StringUtils.isEmailValid(val);
      },

      async loginWithAuthProvidor () {
        this.$Auth.federatedSignIn({ provider: 'Google' })
      },
      async loginUserWithEmail (email, password) {
        const user = await this.$Auth.signIn(email, password);
        const provider = user.signInUserSession.idToken.payload.identities ?
          user.signInUserSession.idToken.payload.identities[0].providerType : '';
        // this.$store.commit('users/userProviderUpdate', provider);
        // this.$store.commit('users/groupUpdate', user.signInUserSession.accessToken.payload['cognito:groups']);
        // this.$store.commit('users/userNameUpdate', user.username);
        const jwt = await user.signInUserSession.idToken.jwtToken
        return {jwt}
      }

    },

    watch : {
      isRememberMe : function (val) {
        localStorage.setItem('rememberMe', val);
      }
    }
  }
</script>

<style lang='scss' scoped>
  .login {
    &__title{
      letter-spacing: 10px;
      font-family: serif;
      line-height: 4rem;
      @media (max-width: 340px){
        letter-spacing: 5px;
      }
    }

    &__container{
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }

    &__row{
      @media (max-width: 400px){
        flex-direction: column;
        align-items: center;

        .q-space {
          min-height: 10px;
        }
      }
    }
  }

  .btn-login-with{
    width: 100%;
    max-width: 185px;
  }

  .btn-social-with{
    width: 100%;
    max-width: 300px;
  }
</style>

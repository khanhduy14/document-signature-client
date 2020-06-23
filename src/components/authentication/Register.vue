<template>

  <q-scroll-area style="height: 95vh;">
    <div class="register column q-pa-md">
      <h1 class="register__title text-h4 text-center q-mt-xl">
        新規ユーザーのご登録
      </h1>
      <p class="text-body1 text-grey-9 text-center q-mt-sm q-mb-lg">
        ユーザー情報をご入力ください
      </p>
      <div class="register__container col-grow">
        <q-form @submit.prevent="submitForm">
          <!--div class="row justify-between">
            <div class="col">
              <q-input
                ref="fullName"
                v-model="fullName"
                label="お名前"
                class="col"
                color="grey-10"
                :rules="[val => !!val.trim() || 'この入力項目は必須です']"
              />
            </div>
          </div-->
          <div class="row q-mb-lg">
            <q-input
              ref="email"
              v-model="email"
              autocomplete="off"
              label="Eメールアドレス（ユーザーID）"
              class="col"
              color="grey-10"
              :rules="[val => !!val || 'この入力項目は必須です', val => isEmailValid(val) || '正しいEmailアドレスを入力してください']"
            />
          </div>
          <div class="row q-mb-lg">
            <q-input
              ref="password"
              v-model="password"
              autocomplete="off"
              label="パスワード"
              type="password"
              class="col"
              color="grey-10"
              :rules="[val => !!val || 'この入力項目は必須です', val => validatePassword(val) || 'パスワードの形式が正しくありません']"
            />
          </div>
          <div class="row q-mb-lg">
            <q-input
              ref="passwordConfirmation"
              v-model="passwordConfirmation"
              autocomplete="off"
              label="パスワード（再確認）"
              type="password"
              class="col"
              color="grey-10"
              :rules="[val => !!val || 'この入力項目は必須です', ()=> passwordConfirmation === password || 'パスワードが不一致です']"
            />
          </div>
          <div class="row q-mb-lg">
            <q-field
              ref="isAsseptTerms"
              :value="isAsseptTerms"
              :rules="[()=> isAsseptTerms || '利用規約、プライバシーポリシーに同意する必要があります']"
              borderless
            >
              <template v-slot:control>
                <q-checkbox
                  v-model="isAsseptTerms"
                  label="利用規約、プライバシーポリシーに同意します"
                  color="grey-10"
                  class="text-body1"
                />
              </template>
            </q-field>
          </div>

          <div class="row q-mb-lg q-mt-md justify-center">
            <q-btn
              label="ユーザー登録"
              :loading = "isLoading"
              :disabled="!isAsseptTerms"
              color="grey-10"
              dark
              unelevated
              style="width: 300px;"
              size="md"
              class="q-mb-lg"
              @click="submitForm"
            />
            <q-btn
              label="キャンセル"
              color="grey-5"
              unelevated
              style="width: 300px;"
              size="md"
              @click="backToLogin"
            />
            <router-link
              class="register__login-link q-mt-xl text-grey-10"
              to="/auth/login"
            >
              ログイン画面へ
            </router-link>
          </div>
        </q-form>
      </div>
    </div>
  </q-scroll-area>
</template>

<script>
  import StringUtils from '../../utils/StringUtils'

  export default {
    name: 'Register',
    data () {
      return {
        fullName : '',
        lastName : '',
        userName : '',
        email : '',
        password : '',
        passwordConfirmation : '',
        isAsseptTerms : false,

        isLoading : false,
      }
    },

    methods : {
      isEmailValid (email) {
        return StringUtils.isEmailValid(email);
      },

      validatePassword (password) {
        return StringUtils.validatePassword(password);
      },

      backToLogin() {
        this.$router.push({ path: 'login' })
      },

      async submitForm () {
        this.isLoading = true
        try {
          this.$Auth.signUp({
            username: this.email,
            password: this.password,
            attributes: {
              email: this.email
            }
          })
            .then(() => {
              this.$notify('ok', 'Please check your email to confirm register')
              this.$router.push('/auth/login');
            })
            .catch(err => {
              if (err.name === 'UsernameExistsException') {
                this.$notify('error', 'Username is existed')
              } else {
                this.$notify('error', err.message)
              }
            });
        }
        finally {
          this.isLoading = false
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  .register{
    &__title{
      letter-spacing: 10px;
      font-family: serif;
      @media (max-width: 400px){
        letter-spacing: 5px;
      }
    }

    &__container{
      width: 100%;
      max-width: 450px;
      margin: 0 auto;
    }

    &__login-link{
      text-decoration: underline;
      display: block;
      display: block;
      width: 100%;
      text-align: center;
    }
  }
</style>

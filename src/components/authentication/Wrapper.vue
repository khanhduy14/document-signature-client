<template>
  <div class="auth container fit">
    <div class="auth__row row">

      <div
        class="auth__left-col col-md-6 col-12 column justify-between items-center items-start"
      >
        <img class="auth__img q-mt-xl q-pt-xl" src="~assets/plant.svg">
        <div class="auth__logo text-h6 text-center q-mb-lg q-pb-lg" style="color: #344646">REDEN</div>
      </div>

      <div class="col-md-6 col-12 column">
        <div class="col-grow">
          <slot></slot>
        </div>
        <div class="auth__terms text-center q-pb-md q-pt-sm">
          <router-link
            to="/guideline"
            class="text-black q-mr-md"
          >
            利用規約
          </router-link>
          <router-link
            to="/policy"
            class="text-black"
          >
           プライバシーポリシー
          </router-link>
        </div>
        <!-- <q-scroll-area></q-scroll-area> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthWrapper'
  }
</script>

<style lang='scss' scoped>
.auth{

  &__row{
    min-height: 100vh;
  }

  &__left-col{
    background-size: cover;
  }

  &__right-col{
  }

  &__img{
    @media (max-width: 1024px){
      width: 50px;
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }

  &__logo{
    letter-spacing: 5px;
  }

  .auth__terms{
    a{
      text-decoration: none;

      &:hover{
        text-decoration: underline;
      }
    }
  }

}
</style>

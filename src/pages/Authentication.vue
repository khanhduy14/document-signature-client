<template>
  <q-page class="flex flex-center fit">
    <AuthWrapper>
      <router-view/>
    </AuthWrapper>
  </q-page>
</template>

<script>
  import AuthWrapper from '../components/authentication/Wrapper.vue'
  export default {
    name: 'Authentication',
    components : {
      'AuthWrapper' : AuthWrapper
    }
  }
</script>

<style scoped>

</style>

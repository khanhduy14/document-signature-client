<template>
  <div>
    <upload-document/>

  </div>

</template>

<script>
  import UploadDocument from '../components/document/UploadDocument.vue'

  export default {
    name: 'User',
    components : {
      'upload-document' : UploadDocument
    },
    async created () {

    }
  }
</script>

<style scoped>

</style>

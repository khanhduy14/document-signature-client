<template>
  <div>
    <main-board></main-board>
    <upload-document></upload-document>
  </div>

</template>

<script>
  import MainBoard from '../components/main_board/MainBoard.vue'
  import UploadDocument from '../components/document/UploadDocument.vue'
  export default {
    name: 'MainBoardPage',
    components : {
      'main-board' : MainBoard,
      'upload-document' : UploadDocument
    }
  }
</script>

<style scoped>

</style>

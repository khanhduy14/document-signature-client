<template>
  <div>
    <main_board></main_board>
  </div>

</template>

<script>
  import MainBoard from '../components/main_board/MainBoard.vue'
  export default {
    name: 'MainBoardPage',
    components : {
      'main_board' : MainBoard
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <q-uploader
      label="Upload files"
      color="purple"
      square
      flat
      bordered
      style="max-width: 300px"
      :filter="checkFileType"
      @rejected="onRejected"
    />
  </div>
</template>

<script>
  export default {
    name: 'UploadDocument',
    methods: {
      checkFileType (files) {
        return files.filter(file => file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
      },

      onRejected (rejectedEntries) {
        this.$q.notify({
          type: 'negative',
          message: `${rejectedEntries.length} file(s) did not pass validation constraints`
        })
      }
    }
  }
</script>

<style scoped>

</style>

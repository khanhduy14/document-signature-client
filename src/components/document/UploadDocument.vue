<template>
  <div>
    <q-uploader
      refs="uploader"
      url="http://localhost:8080/file/upload"
      fieldName="file"
      label="Upload files"
      color="purple"
      square
      flat
      bordered
      style="max-width: 300px"
      :filter="checkFileType"
      @rejected="onRejected"
      @uploaded="onUpload"
      @finish="onFinish"
    />
  </div>
</template>

<script>

  import DocumentService from '../../service/DocumentService'

  export default {
    name: 'UploadDocument',
    data () {
      return {
        documentId : ''
      }
    },
    methods: {
      onUpload (event) {
        if (event.xhr.response) {
          DocumentService.createDocument(event.xhr.response)

        }
        // this.$refs.uploader.reset();
      },
      onFinish () {
        console.log(`@finish`)
      },
      uploadFile(file, updateProgress) {
        return new Promise((resolve, reject) => {
          resolve(file);
        });
      },

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

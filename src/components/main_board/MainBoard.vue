<template>
  <div class="q-pa-md">
    <q-table
      grid
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>

  import DocumentService from '../../service/DocumentService'
  import UserService from '../../service/UserService'

  export default {
    name: 'MainBoard',
    data () {
      return {
        documentList: null,
        filter: null,
        columns: [
          {
            name: 'desc',
            required: true,
            label: 'No',
            align: 'left',
            field: row => row.index,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'registerDate',
            align: 'center',
            label: 'Register Date',
            field: 'registerDate',
            sortable: true
          },
          {
            name: 'Owner',
            label: 'Owner',
            field: 'owner',
            sortable: true
          },
          {
            name: 'Signature Status',
            label: 'Signature Status',
            field: 'verify_status',
            sortable: true
          }
        ],
        data: [
        ]
      }
    },

    methods: {
      async fetchData() {
        try {
          this.documentList = await DocumentService.getDocument(this.filter)
          this.data = this.documentList.data
          this.data.forEach(el => {
            console.log(el)
            const user = UserService.getUser(el.owner)
          })

        } catch (ex){
          console.error(ex)
        }
      }
    },

    async created () {
      await this.fetchData();
    },
  }
</script>

<style scoped>

</style>

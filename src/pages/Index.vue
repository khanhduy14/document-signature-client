<template>
  <div class="row justify-center">
    <q-page>
      <router-view/>
    </q-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ExampleComponent from 'components/CompositionComponent.vue'
import { Todo, Meta } from 'components/models'

export default Vue.extend({
  name: 'PageIndex'
})
</script>

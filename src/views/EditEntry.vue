<template>
<div>
  <h1>Edit Entry</h1>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex x32>
        <v-card>
          <v-card-text>
            <edit-entry/>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
// @ is an alias to /src
import EditEntry from '@/components/EditEntry.vue'
import { mapState } from 'vuex'

export default {
  name: 'edit',
  components: {
    EditEntry
  },
  mounted () {
    this.$store.dispatch('loadEntries')
  },
  computed: mapState([
    'entries'
  ])
}
</script>

<template>
<div>
  <h1>Guest Book</h1>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xl8>
        <guest-book-table :entries="entries"/>
      </v-flex>
      <v-flex xl4>
        <v-card>
          <v-card-text>
            <add-entry/>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
// @ is an alias to /src
import GuestBookTable from '@/components/GuestBookTable.vue'
import AddEntry from '@/components/AddEntry.vue'
import { mapState } from 'vuex'

export default {
  name: 'GuestBook',
  components: {
    GuestBookTable,
    AddEntry
  },
  mounted () {
    this.$store.dispatch('loadEntries')
  },
  computed: mapState([
    'entries'
  ])
}
</script>

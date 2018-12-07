<template>
  <div>
    <v-data-table
      :items="entries"
      :headers="headers"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.message }}</td>
        <td class="text-xs-left">{{ props.item.date | formatDate }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'GuestBookTable',
  props: {
    entries: Array
  },
  data () {
    return {
      headers: [
        { text: 'Name', value: 'Name', sortable: false },
        { text: 'Comment', value: 'Comment', sortable: false },
        { text: 'Time', value: 'Time', sortable: false }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div>
    <v-data-table
      :items="entries"
      :headers="headers"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ posterCount(props.item.name) }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.message }}</td>
        <td class="text-xs-left">{{ props.item.date | formatDate }}</td>
        <td>
          <router-link :to="'/edit/' + props.index + '/' + props.item.name +'/' + props.item.message">Edit URL</router-link> | 
          <router-link :to="{ name: 'EditEntry', params: { id: props.index, name: props.item.name, message: props.item.message }}">Edit Params</router-link> | 
          <router-link :to="{ path: 'edit', query: { id: props.index, name: props.item.name, message: props.item.message }}">Edit Quary</router-link> | 
          <a @click="editEntryData(props.index, props.item.name, props.item.message)">Edit Pass Data</a>
        </td>
      </template>{
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
        { text: '#', value: '#', sortable: false },
        { text: 'Name', value: 'Name', sortable: false },
        { text: 'Comment', value: 'Comment', sortable: false },
        { text: 'Time', value: 'Time', sortable: false },
        { text: 'Edit', value: 'Edit', sortable: false }
      ]
    }
  },
  methods: {
    posterCount (name) {
      return this.$store.getters.posterCount(name)
    },
    editEntryData (id, name, message) {
      this.$router.push({
        name: 'EditEntry',
        params: {
            id: id,
            name: name,
            message: message
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

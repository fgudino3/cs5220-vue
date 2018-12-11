<template>
  <div>
    <v-text-field color="success" label="name" v-model="name"></v-text-field>
    <v-text-field color="success" label="message" v-model="message"></v-text-field>
    <v-btn color="success" @click="editEntry">Edit Entry</v-btn>
  </div>
</template>

<script>
export default {
  name: 'edit-entry',
  props: {
    entry: {
      type: Object
    }
  },
  data () {
    console.log(this.entry);
    return {
      name: this.$route.params.name || this.$route.query.name,
      message: this.$route.params.message || this.$route.query.message
    }
  },
  methods: {
    editEntry () {
      let id = this.$route.params.id;
      if(typeof id === 'undefined'){
        id = this.$route.query.id
      }

      this.$store.dispatch('editEntry', {
        id: id,
        name: this.name,
        message: this.message
      })
    }
  }
}
</script>

<template>
  <div>
    <v-text-field color="success" label="name" v-model="name"></v-text-field>
    <v-text-field color="success" label="message" v-model="message"></v-text-field>
    <v-btn color="success" @click="addEntry">Add Entry</v-btn>
  </div>
</template>

<script>
export default {
  name: 'AddEntry',
  data () {
    return {
      name: '',
      message: ''
    }
  },
  methods: {
    addEntry () {
      this.$store.dispatch('addEntry', {
        name: this.name,
        message: this.message
      })
      this.name = ''
      this.message = ''
    }
  }
}
</script>

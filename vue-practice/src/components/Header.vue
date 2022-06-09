<template>
  <h1 v-if='searchTitle'>{{searchTitle}}</h1>
</template>


<script>
  export default {
    name: 'Header one',
    data() {
      return {
        headerValue: 'asdf'
      }
    },
    props: {
      searchTitle: String,
    }
  }
</script>

<style>
</style>

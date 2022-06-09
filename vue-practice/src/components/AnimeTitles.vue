<template>
  <ul v-if='searchTitle'>
    <li v-for='title in animeTitles' :key='title.id'>{{title.title}}</li>
  </ul>
  <h1 v-else>Search for Anime Below!</h1>
</template>

<script>
  export default {
    name: 'anime titles',
    props: {
      animeTitles: Array,
      searchTitle: String
    },
  }
</script>

<style scope>
  ul {
    border: 3px solid black;
    border-radius: 10px
  }
</style>

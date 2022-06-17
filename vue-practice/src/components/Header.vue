<template>
  <h1 v-if='searchTitle'>{{searchTitle}}</h1>
</template>


<script>
  export default {
    name: 'Anime Search Title',
    props: {
      searchTitle: String,
    },
  }
</script>

<style>
</style>

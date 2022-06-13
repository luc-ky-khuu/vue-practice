<template>
  <ul v-if='props.animeList.length > 0'>
    <li v-for='title in props.animeList' :key='title.id'>
      {{title.title}}
      <button @click.prevent='$emit("addFavorite", title.title)'>Add Favorite</button>
    </li>
  </ul>
  <h1 v-else-if='!props.searchTitle'>Search for Anime Below!</h1>
</template>

<script>
  export default {
    name: 'anime titles',
    props: {
      props: Object
    },
    emits: ['addFavorite']
  }
</script>

<style scope>
  ul {
    border: 3px solid black;
    border-radius: 10px
  }
  li {
    display: flex;
    justify-content: space-between;
  }
</style>

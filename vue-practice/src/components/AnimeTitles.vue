<template>
  <ul v-if='props.animeList.length > 0'>
    <li v-for='(title, index) in props.animeList'
      :key='index'
      :class="[props.favorites.indexOf(title.title) > -1 && 'green']"
    >
      {{title.title}}
      <button @click.prevent='$emit("add-favorite", title.title)'>Add Favorite</button>
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
    emits: ['add-favorite']
  }
</script>

<style>
  ul {
    border: 3px solid black;
    border-radius: 10px
  }
  li {
    display: flex;
    justify-content: space-between;
  }

  .green {
    color: green;
  }
</style>

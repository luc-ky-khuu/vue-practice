<template>
  <ul v-if='props.animeList.length > 0'>
    <li v-for='title in props.animeList'
      :key='title.mal_id'
      :class="[props.favorites.indexOf(title.title) > -1 && 'green']"
    >
      <a :href="'#' + title.mal_id">{{title.title}}</a>
      <button @click.prevent='$emit("add-favorite", title.title)'>Add Favorite</button>
    </li>
  </ul>
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
  a {
    text-decoration: none;
    color: inherit;
  }
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

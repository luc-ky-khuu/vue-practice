<template>
  <h1>Favorites</h1>
  <ul>
    <li v-for='anime in props' :key='anime'>
      {{anime}}
      <button @click.prevent='$emit("removeFavorite", anime)'>Remove Fav</button>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'favorite list',
    props: {
      props: Array
    },
    emits: ['removeFavorite']
  }
</script>

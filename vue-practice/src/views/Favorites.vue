<template>
  <h1>Favorites</h1>
  <ul>
    <li v-for='(anime, index) in props.favorites' :key='index'>
      {{anime.title}}
      <button @click.prevent='$emit("remove-favorite", anime)'>Remove Fav</button>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'favorite list',
    props: {
      props: Object
    },
    emits: ['remove-favorite']
  }
</script>

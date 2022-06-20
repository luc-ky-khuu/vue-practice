<template>
  <div>
    <router-link to='/' @click.prevent='$emit("reset-home")'>Home</router-link>
    <router-link to='/favorites' @click.prevent='$emit("fetch-favorites")'>Favorites</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    emits: ['reset-home', 'fetch-favorites']
  }
</script>

<style scoped>
  a {
    margin: 3rem;
  }
</style>

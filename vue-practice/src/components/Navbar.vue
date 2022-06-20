<template>
  <div>
    <router-link to='/'>Home</router-link>
    <router-link to='/favorites'>Favorites</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
  }
</script>

<style scoped>
  a {
    margin: 3rem;
  }
</style>

<template>
  <h1>Favorites</h1>
  <ul>
    <li v-for='anime in props' :key='anime'>{{anime}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'favorite list',
    props: {
      props: Array
    }
  }
</script>

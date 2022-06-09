<template>
  <ul >
    <li v-for='title in animeTitles' :key='title.id'>{{title.title}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'anime titles',
    props: {
      animeTitles: Array
    },
  }
</script>

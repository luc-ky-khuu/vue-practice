<template>
  <h1>{{this.anime.title}}</h1>
  <img v-if='this.anime.images' :src='this.anime.images.jpg.image_url'/>
</template>

<script>
  export default {
    name: 'anime details',
    data() {
      return {
        anime: {}
      }
    },
    props: {
      malId: String,
    },
    async created() {
        const results = await fetch(`https://api.jikan.moe/v4/anime/${this.malId}`)
        const animeJSON = await results.json();
        this.anime = animeJSON.data
    }
  }
</script>

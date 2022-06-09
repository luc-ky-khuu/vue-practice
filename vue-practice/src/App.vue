<template>
  <main>
    <Header />
    <AnimeTitles :animeTitles='animeList' />
    <Button @submit='submitForm' />
  </main>
</template>


<script>
  import Header from './components/Header.vue'
  import Button from './components/Button.vue'
  import AnimeTitles from './components/AnimeTitles.vue'
  export default {
    components: {
      Header,
      Button,
      AnimeTitles
    },
    data () {
      return {
        animeList: '',
      }
    },
    methods: {
      submitForm: async function () {
        const results = await fetch('https://api.jikan.moe/v4/anime?q=naruto&sfw')
        const list = await results.json();
        this.animeList = list.data;
        console.log(this.animeList)
      }
    }
  }
</script>

<style>
</style>

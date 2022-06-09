<template>
  <main>
    <Header :searchTitle='searchTitle'/>
    <AnimeTitles :animeTitles='animeList' :searchTitle='searchTitle' />
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
        animeList: [],
        searchTitle: '',
      }
    },
    methods: {
      submitForm: async function (search) {
        this.searchTitle = search;
        const results = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)
        const list = await results.json();
        this.animeList = list.data;
      }
    }
  }
</script>

<style>
</style>

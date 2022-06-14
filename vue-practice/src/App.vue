<template>
  <main>
    <Header :searchTitle='searchTitle'/>
    <AnimeTitles :props='{
          animeList: this.animeList,
          searchTitle: this.searchTitle
        }'
        @addFavorite='addFavorites'/>
    <Button @submit='submitForm' />
    <Favorites :props='favorites' @removeFavorite='removeFavorite'/>
  </main>
</template>


<script>
  import Header from './components/Header.vue'
  import Button from './components/Button.vue'
  import AnimeTitles from './components/AnimeTitles.vue'
  import Favorites from './components/Favorites.vue'
  export default {
    components: {
      Header,
      Button,
      AnimeTitles,
      Favorites
    },
    data () {
      return {
        animeList: [],
        searchTitle: '',
        favorites: []
      }
    },
    mounted() {
      const previousDataJSON = localStorage.getItem('anime-vue-favorites');
      if (previousDataJSON !== null) {
        this.favorites = JSON.parse(previousDataJSON);
      }
      window.addEventListener('beforeunload', () => {
        const dataJSON = JSON.stringify(this.favorites);
        localStorage.setItem('anime-vue-favorites', dataJSON);
      });
    },
    methods: {
      submitForm: async function (search) {
        this.searchTitle = search;
        const results = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)
        const list = await results.json();
        this.animeList = list.data;
      },
      addFavorites: function(anime) {
        if (this.favorites.indexOf(anime) > -1) {
          return
        }
        let favorites = [...this.favorites];
        favorites.push(anime);
        this.favorites = favorites
      },
      removeFavorite: function(anime) {
        const index = this.favorites.indexOf(anime);
        this.favorites.splice(index, 1);
      }
    }
  }
</script>

<style>
</style>

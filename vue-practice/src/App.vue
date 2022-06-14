<template>
  <main>
    <div>
      <a href='#'>Home</a>
      <a href='#Favorites'>Favorites</a>
    </div>
    <Header :searchTitle='searchTitle'/>
    <AnimeTitles :props='{
          animeList: this.animeList,
          searchTitle: this.searchTitle,
          favorites: this.favorites
        }'
        @add-favorite='addFavorites'/>
    <Button @submit='submitForm' />
    <Favorites :props='favorites' @remove-favorite='removeFavorite'/>
  </main>
</template>


<script>
  import Header from './components/Header.vue'
  import Button from './components/Button.vue'
  import AnimeTitles from './components/AnimeTitles.vue'
  import Favorites from './components/Favorites.vue'
  function parseRoute(hashRoute) {
    if (hashRoute.startsWith('#')) {
      hashRoute = hashRoute.replace('#', '');
    }
    const [path, queryString] = hashRoute.split('?');
    const params = new URLSearchParams(queryString);
    return { path, params };
  }
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
        favorites: [],
        route: parseRoute(window.location.hash)
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

<style scoped>
  a {
    text-decoration: none;
    color: black;
    margin: 3rem;
  }
</style>

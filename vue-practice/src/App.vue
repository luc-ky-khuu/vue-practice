<template>
  <main>
    <Navbar />

    <div v-if='Number(route.path) > 0'>
      <Details :malId='route.path'/>
    </div>

    <div v-else-if="route.path === 'Favorites'">
      <Favorites :props='favorites' @remove-favorite='removeFavorite'/>
    </div>

    <div v-else>
      <Home
        @submit='submitForm'
        :props='{
            animeList: this.animeList,
            searchTitle: this.searchTitle,
            favorites: this.favorites
          }'
        @add-favorite='addFavorites'
          />
    </div>
  </main>
</template>


<script>
  import Home from './pages/Index.vue'
  import Favorites from './pages/Favorites.vue'
  import Navbar from './components/Navbar.vue'
  import Details from './components/Details.vue'
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
      Home,
      Favorites,
      Details,
      Navbar
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
      window.addEventListener('hashchange', () => {
        this.route = parseRoute(window.location.hash);
      });
    },
    methods: {
      submitForm: async function (search) {
        this.searchTitle = search;
        const results = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)
        const list = await results.json();
        this.animeList = list.data;
        console.log('list', list.data)
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

</style>

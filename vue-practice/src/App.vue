<template>
  <main>
    <Navbar @reset-home='resetHome' @fetch-favorites='fetchFavorites'/>
    <router-view v-if="this.$route.path === '/'"
      @submit='submitForm'
      :props='{
          animeList: this.animeList,
          searchTitle: this.searchTitle,
          favorites: this.favorites
        }'
      @add-favorite='addFavorites'
        ></router-view>
    <router-view v-else-if="this.$route.path === '/favorites'"
      :props='{
          favorites: this.favorites
        }'
      @remove-favorite='removeFavorite'
        ></router-view>
    <router-view v-else></router-view>
    <Footer />
  </main>
</template>


<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {
      Navbar,
      Footer
    },
    data () {
      return {
        animeList: [],
        searchTitle: '',
        favorites: [],
      }
    },
    mounted() {
      this.fetchFavorites();
    },
    methods: {
      resetHome: function() {
        this.searchTitle = '';
        this.animeList = [];
      },
      submitForm: async function (search) {
        this.searchTitle = search;
        const results = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)
        const list = await results.json();
        this.animeList = list.data;
      },
      addFavorites: async function(anime) {
        for (let i = 0; i < this.favorites.length; i++) {
          if (this.favorites[i].title === anime.title) {
            return;
          }
        }
        const newFav = {
          title: anime.title,
          mal_id: anime.mal_id
        }
        let favorites = [...this.favorites];
        favorites.push(newFav);
        this.favorites = favorites
        await fetch('api/favorites', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(newFav)
        })
      },
      removeFavorite: async function(anime) {
        const index = this.favorites.indexOf(anime);
        this.favorites.splice(index, 1);
        await fetch(`api/favorites/${anime.id}`, {
          method: 'DELETE',
          body: JSON.stringify(anime.id)
        })
      },
      fetchFavorites: async function() {
        const res = await fetch('api/favorites');
        const list = await res.json();
        this.favorites = list;
      }
    }
  }
</script>

<style scoped>

</style>

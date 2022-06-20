<template>
  <Header :searchTitle='props.searchTitle'/>
  <h1 v-if='!props.searchTitle'>Search for Anime Below!</h1>
   <form>
    <input v-model='searchTitle'>
    <button @click.prevent="submitForm(searchTitle)">button</button>
  </form>
  <ul v-if='props.animeList.length > 0'>
    <li v-for='title in props.animeList'
      :key='title.mal_id'
      :class="[checkFavs(props.favorites, title.mal_id)]"
    >
    {{checkFavs(props.favorites)}}
      <a :href="'#' + title.mal_id">{{title.title}}</a>
      <button @click.prevent='$emit("add-favorite", title)'>Add Favorite</button>
    </li>
  </ul>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'anime titles',
    data() {
      return {
        searchTitle: '',
        favs:[]
      }
    },
    components: {
      Header,
    },
    props:['props'],
    emits: ['add-favorite', 'submit'],
    methods: {
      submitForm: function(title) {
        this.searchTitle = '';
        this.$emit('submit', title)
      },
      checkFavs: function(prop, id) {
        const favs = JSON.parse(JSON.stringify(prop));
        for (let i = 0; i < favs.length; i++) {
          if (favs[i].mal_id === id) {
            return 'green'
          }
        }
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    border: 3px solid black;
    border-radius: 10px
  }
  li {
    display: flex;
    justify-content: space-between;
  }

  .green {
    color: green;
  }
</style>

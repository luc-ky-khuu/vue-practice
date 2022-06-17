<template>
  <Header :searchTitle='props.searchTitle'/>
  <h1 v-if='!props.searchTitle'>Search for Anime Below!</h1>
   <form>
    <input v-model='searchTitle'>
    <button @click.prevent="submitForm(searchTitle)" >button</button>
  </form>
  <ul v-if='props.animeList.length > 0'>
    <li v-for='title in props.animeList'
      :key='title.mal_id'
      :class="[props.favorites.indexOf(title) > -1 && 'green']"
    >
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
        searchTitle: ''
      }
    },
    components: {
      Header,
    },
    props:['props'],
    emits: ['add-favorite', 'submit'],
    methods: {
      submitForm: function(title) {
        this.$emit('submit', title)
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

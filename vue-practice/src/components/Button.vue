<template>
  <form>
    <input v-model='searchTitle'>
    <button @click.prevent="$emit('submit', searchTitle)" >button</button>
  </form>
</template>

<script>
  export default {
    name: 'Test Button',
    data() {
      return {
        searchTitle: ''
      }
    }
  }
</script>

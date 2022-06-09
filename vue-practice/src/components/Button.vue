<template>
  <form>
    <input type='text'>
    <button @click="$emit('submit')" >button</button>
  </form>
</template>

<script>
  export default {
    name: 'Test Button',
  }
</script>

<template>
  <default-layout/>
</template>

<script>
import defaultLayout from './layouts/default.layout'
export default {
  name: 'App',
  components: {
    defaultLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

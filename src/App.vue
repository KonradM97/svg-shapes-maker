<template>
  <SvgShapesMaker/>
</template>

<script>
import SvgShapesMaker from './components/SvgShapesMaker.vue'

export default {
  name: 'App',
  components: {
    SvgShapesMaker
  }
}
</script>

<style>
html{
  height: 100vh;
}
body{
  background-color: #282C3E;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

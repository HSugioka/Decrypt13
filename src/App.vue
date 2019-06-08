<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div id="app">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
}
</style>

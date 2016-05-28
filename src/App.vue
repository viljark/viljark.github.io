<template>
  <main id="app">
    <section>
      <img class="logo" src="./assets/logo.png">
      <hello></hello>
      <p>
        This is a sample app using <a target="_blank" href="http://vuejs-templates.github.io/webpack" target="_blank">vuejs webpack templates</a>.
      </p>
    </section>
  </main>
  <v-footer></v-footer>
</template>

<script>
import Hello from './components/Hello'
import VFooter from './components/VFooter'

export default {
  components: {
    Hello,
    VFooter
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  color: #2c3e50;
  font-family: Roboto Slab, Source Sans Pro, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
  max-width: 600px;
  text-align: center;
  margin: 10vh auto 1vh;
}
a {
  color: #42b983;
  text-decoration: none;
}

p {
  margin: 0 10px;
  &:last-child {
    margin-bottom: 0;
  }
}

.logo {
  width: 100px;
  height: 100px
}
</style>

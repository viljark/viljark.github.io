<template>
  <main id="app">
    <v-header :page.sync="page"></v-header>
    <section class="content">
      <hello transition="fadein" v-if="page == 'hello'">

      </hello>
      <work transition="fadein" v-if="page == 'work'">

      </work>

    </section>
  </main>
  <v-footer></v-footer>
</template>

<script>
import VHeader from './components/VHeader'
import VFooter from './components/VFooter'
import Hello from './components/Hello'
import Work from './components/Work'
export default {
  data(){
    return{
      page: 'hello'
    }
  },
  components: {
    Hello,
    Work,
    VFooter,
    VHeader
  },
  events: {
    pagechange: function(page) {
      this.page = page;
    }
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
* {
  box-sizing: border-box;
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
  display: flex;
  flex: 1;
  max-width: 700px;
  border-radius: 5px;
  text-align: left;
  margin: 3vh auto 6vh;
  font-size: 14px;
  overflow: hidden;
  a {
    color: #2c3e50;
    text-decoration: underline;
  }
}
.content {
  width: 500px;
  padding: 0 25px 25px;
  position: relative;
  overflow: hidden;
}
@media all and (max-width: 700px) {
  main {
    flex-direction: column;
  }
  .content {
    width: 100%;
    padding: 0 0 25px;
  }
}
a {
  color: #05b7ee;
  text-decoration: none;
}

p {
  margin: 0 0 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.fadein-enter {

  animation: fadein .5s;
}
.fadein-leave {
  position: absolute;
  top: 0;
  animation: fadeout .5s;
}
@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeout {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>

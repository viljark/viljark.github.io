<template>
  <div id="app">
    <main>
      <v-header :page="page"></v-header>
      <section class="content">
        <transition name="fadein">
          <router-view class="view">
          </router-view>
        </transition>
      </section>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import VHeader from './components/VHeader'
  import VFooter from './components/VFooter'

  export default {
    data(){
      return {
        page: 'hello'
      }
    },
    components: {
      VFooter,
      VHeader
    },
    events: {
      pagechange: function (page) {
        this.page = page;
      }
    }
  }
</script>

<style lang="scss" src="./app.scss">

</style>

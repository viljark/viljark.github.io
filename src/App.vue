<template>
    <main>
      <v-header :page.sync="page"></v-header>
      <section class="content">
        <router-view
          class="view"
          keep-alive
          transition="fadein">
        </router-view>

      </section>
    </main>
    <v-footer></v-footer>
</template>

<script>
import VHeader from './components/VHeader'
import VFooter from './components/VFooter'

export default {
  data(){
    return{
      page: 'hello'
    }
  },
  replace: false,

  components: {
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

<style lang="scss" src="./app.scss">

</style>

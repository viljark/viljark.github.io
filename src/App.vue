<template>
  <div id="app">
    <main>
      <v-header :page="page"></v-header>
      <div class="content">
        <transition name="fadein">
          <router-view class="view">
          </router-view>
        </transition>
      </div>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import VHeader from './components/v-header'
  import VFooter from './components/v-footer'

  export default {
    data() {
      return {
        page: 'hello'
      }
    },
    components: {
      VHeader,
      VFooter
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

<template>
  <div class="hello">
    <h1 v-on:click="increase()">{{ msg }} <span v-for="n in counter">!</span></h1>
    <p>
      This is a sample app using <a target="_blank" href="http://vuejs-templates.github.io/webpack" target="_blank">vuejs webpack templates</a>.
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue.js & Webpack!',
      counter: 0
    }
  },
  methods: {
    increase: function() {
      this.counter = this.counter + 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

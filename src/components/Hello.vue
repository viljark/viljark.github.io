<template>
  <div class="hello">
    <h1 v-on:click="increase()">{{ msg }} <span v-for="n in counter">!</span></h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
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
h1 {
  color: #42b983;
}
</style>

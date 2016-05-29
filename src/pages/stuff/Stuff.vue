<template>
  <div>
    <h1>
      Experiments
    </h1>
    <ul>
      <li>
        <a href="https://codepen.io/viljark">My codepen</a>
      </li>
      <li>
        <a href="http://plnkr.co/users/viljark">My plnkr</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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

<style scoped>

</style>

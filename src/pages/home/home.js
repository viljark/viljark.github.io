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

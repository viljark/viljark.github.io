<template>
  <footer class="footer">
    <div class="footer__container">
      <ul class="footer__list">
        <li class="footer__item">
          Viljar K.
        </li>
        <li class="footer__item">
          FE Developer @ <strong><a href="http://iglu.ee">Iglu</a></strong>
        </li>
        <li class="footer__item">
          <a href="https://www.linkedin.com/in/viljar-kärgenberg-81378398">LinkedIn</a>
        </li>
        <li class="footer__item">
          Twitter: <strong><a href="https://twitter.com/ajateenija">@ajateenija</a></strong>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue.js & Webpack!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer {
  border-top: 2px solid #42b983;
  background: #fefefe;
  padding: 20px;
}
.footer__list {
  max-width: 650px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
}
@media all and (max-width: 500px) {
  .footer__list {
    flex-direction: column;
    font-size: 12px;
  }
  .footer__item {
    padding-bottom: 3px;
  }
}
.footer__item {
  width: 100%;
  text-align: center;
}

</style>

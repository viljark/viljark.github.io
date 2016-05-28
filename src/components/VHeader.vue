<template>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item" v-bind:class="{'nav__item--active': page == 'hello'}">
            <a class="nav__link" v-on:click="changePage('hello')" href="#">Home</a>
          </li>
          <li class="nav__item" v-bind:class="{'nav__item--active': page == 'work'}">
            <a class="nav__link" v-on:click="changePage('work')" href="#">Work</a>
          </li>
          <li class="nav__item" v-bind:class="{'nav__item--active': page == 'contact'}">
            <a class="nav__link" v-on:click="changePage('contact')" href="#">Stuff</a>
          </li>
        </ul>
      </nav>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
      props: ["page"],
      methods: {
        changePage: function(page) {
          //this.$dispatch('pagechange', page);
          this.page = page;
        }
      }
    }
</script>
<style lang="scss">
  nav {
    width: 200px;
  }
  .nav__list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    text-align: left;
    //background: linear-gradient(135deg, #05b7ee 0%,#1cceeb 72%,#13eae3 100%);
  }
  .nav__item {
    width: 100%;
  }
  .nav__item--active .nav__link {
    border-color: #05b7ee;
    color: #05b7ee;

  }
  .nav__link {
    display: inline-block;
    overflow: hidden;
    text-decoration: none;
    padding: 0;
    text-transform: uppercase;
    font-size: 40px;
    transition: all .2s ease-in-out;
    line-height: 29px;
    height: 23px;
    border-bottom: 1px solid rgba(204, 204, 204, 0.52);
    font-weight: bold;
    color: #2c3e50;
    &:hover {
      color: #05b7ee;
    }
  }
</style>

<template>
<div>
 <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#"><router-link :to="{ name: 'home'}">Home</router-link></b-nav-item>
      <b-nav-item href="#"><router-link :to="{ name: 'suasreceitas'}">Suas Receitas</router-link></b-nav-item>
      <b-nav-form id='recSearch'>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Pesquisar Receitas" v-model ="search" ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" @click="searchParam()"><router-link :to="{ name:'pesquisareceitas'}"> Pesquisar </router-link></b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
  <router-view />
</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'App',
  data(){
    return{
      search: ''
    }
  },
  components: {
  },
  methods:{...mapActions(["searchRecipes"]),
    searchParam(){
      this.searchRecipes(this.search)
    } 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

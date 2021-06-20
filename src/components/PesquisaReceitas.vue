<template>
<div> 
  <div class="cards"> 
      <b-card v-for="receita in getSearchedRecipes" :key="receita.id"
        :title="receita.title"
        :img-src="receita.imageUrls"
        :img-alt="receita.title"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Porções:{{receita.servings}}
          Tempo de preparação: {{receita.readyInMinutes}}
        </b-card-text>
        <router-link :to="{ name: 'receita', params: {id : receita.id}}">
          <b-button variant="primary">Ver mais</b-button>
        </router-link> 
          <b-button variant="primary" @click="addRecipes(receita)">Like</b-button>
      </b-card>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";  


export default {
  name: "PesquisaReceitas",
  components:{  },
  computed: mapGetters(["getSearchedRecipes"]),
  methods: {
    ...mapActions(["searchRecipes","addRecipes"]),
  },
  created() {

  },
};
</script>

<style>
.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left:10%;
  margin-right:10%
}
</style>
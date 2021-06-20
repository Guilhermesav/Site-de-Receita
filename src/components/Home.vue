<template>
<div> 
  <div class="cards"> 
      <b-card v-for="receita in getRecipes" :key="receita.id"
        :title="receita.title"
        :img-src="receita.image"
        :img-alt="receita.title"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Porções:{{receita.servings}}
          Tempo de preparação: {{receita.preparationMinutes}}
          Curtidas:{{receita.aggregateLikes}}
          De: {{receita.sourceName}}
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
  name: "Home",
  components:{  },
  computed: mapGetters(["getRecipes"]),
  methods: {
    ...mapActions(["retrivalRecipes","addRecipes"]),
  },
  created() {
    this.retrivalRecipes();
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
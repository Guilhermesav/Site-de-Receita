<template>
  <div>
    <div v-if="receita == null" class = "receita">
        <h1>{{getRecipeInfo.title}}</h1>
        <img :src="getRecipeInfo.image">
        <ul id="ingrediente">
          <li v-for="ingrediente in getRecipeInfo.extendedIngredients" :key="ingrediente.id">{{ingrediente.name}}</li>
        </ul>
        <div v-html="getRecipeInfo.instructions"></div>
    </div>
    <div v-else class = "receitaPessoal">
        <h1>{{receita.title}}</h1>
        <img :src="receita.image">
        <ul id="ingrediente">
          <li v-for="ingrediente in receita.extendedIngredients" :key="ingrediente.id">{{ingrediente.name}}</li>
        </ul>
        <div v-html="receita.instructions"></div>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters } from "vuex";

export default {
  name: "Receita",
  data() {
    return {
      receita: null,
    };
  },
  methods:{...mapActions(["recipeInfo"])
  },
  computed: mapGetters(["getRecipes","getFavouriteRecipes","getSearchedRecipes","getRecipeInfo"]),
  created() {
    this.recipeInfo(this.$route.params.id)
    
    const filtered_favourite_recipe = this.getFavouriteRecipes.filter(
      (p) => p.id == this.$route.params.id
    ); 
    this.receita = filtered_favourite_recipe.length == 0 ? this.receita : filtered_favourite_recipe[0];
  },
};
</script>
<style>
.receita{  
  justify-content: center;
  margin-left:2%;
  margin-right:25%;
}
.receitaPessoal{  
  justify-content: center;
  margin-left:2%;
  margin-right:25%;
}
</style>
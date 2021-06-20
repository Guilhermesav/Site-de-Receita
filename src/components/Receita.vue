<template>
  <div>
    <div class = "receita">
        <h1>{{receita.title}}</h1>
        <img :src="receita.image">
        <ul id="ingrediente">
          <li v-for="ingrediente in receita.extendedIngredients" :key="ingrediente.id">{{ingrediente.name}}</li>
        </ul>
        <div v-html="receita.summary"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Receita",
  data() {
    return {
      receita: null,
    };
  },
  computed: mapGetters(["getRecipes","getFavouriteRecipes","getSearchedRecipes"]),
  created() {
    const filtered_recipe = this.getRecipes.filter(
      (p) => p.id == this.$route.params.id
    );
    const filtered_favourite_recipe = this.getFavouriteRecipes.filter(
      (p) => p.id == this.$route.params.id
    );
    const filtered_searchRecipe = this.getSearchedRecipes.filter(
      (p) => p.id == this.$route.params.id
    )
    this.receita = filtered_recipe.length == 0 ? null : filtered_recipe[0];
    this.receita = filtered_favourite_recipe.length == 0 ? this.receita : filtered_favourite_recipe[0];
    this.receita = filtered_searchRecipe.length == 0 ? this.receita : filtered_searchRecipe[0]
  },
};
</script>
<style>
.receita{  
  justify-content: center;
  margin-left:2%;
  margin-right:25%;
}
</style>
<template>
  <div>
    <div id= "botaoAdd">
      <b-button id="buttonModal" v-b-modal.modal-1> Adicionar Receita</b-button>
    </div>
    <b-modal id="modal-1" hide-footer title="Adicionar Receita">
      <AddReceita />
    </b-modal>
    <div class="cards">
      <b-card
        v-for="receita in getFavouriteRecipes"
        :key="receita.id"
        :title="receita.title"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          Porções:{{ receita.servings }} 
          Tempo de preparação:{{ receita.preparationMinutes }}
          De: {{ receita.sourceName }}
        </b-card-text>
        <router-link :to="{ name: 'receita', params: { id: receita.id } }">
          <b-button variant="primary">Ver mais</b-button>
        </router-link>
        <b-button variant="danger" @click="deleteRecipes(receita.id)">Deletar</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
import AddReceita from "./AddReceita.vue";
export default {
  name: "SuasReceitas",
  components: { AddReceita },
  computed: mapGetters(["getFavouriteRecipes","getRecipes"]),
  created() {
    const filtered_recipe = this.getFavouriteRecipes.filter(
      (p) => p.id == this.$route.params.id
    );
    this.receita = filtered_recipe.length == 0 ? null : filtered_recipe[0];
  },
  methods: {
    ...mapActions(["addRecipes","deleteRecipes"]),
    createReceita(){
      this.addRecipes(this.form);
    },
  },
};
</script>

<style>
#botaoAdd{
margin-top:1%;
display:flex;
justify-content:space-around;
}

</style>
<template>
  <b-row>
    <b-row id ="formTitle">Add Receita</b-row>
    <b-form id="formReceita">
      <b-form-group
        id="input-group-1"
        label="Id da Receita"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.id"          
          placeholder="ID da Receita"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Nome da Receita"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.title"          
          placeholder="Nome da Receita"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Tempo de Preparação:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.preparationMinutes"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
     
        <b-form-select id="select" v-model="form.extendedIngredients" :options="options"  multiple :select-size="5"></b-form-select>

      <b-form-group id="input-group-5" label="Quantas Porções?" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.servings"
          placeholder ="quantidade de porções"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-6" label="Como preparar?" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.summary"
          placeholder ="Como preparar?"
          required
        ></b-form-input>
      </b-form-group>
      <b-button  @click="createReceita()" >Enviar</b-button>
    </b-form>
  </b-row>
</template>

<script>
import {mapActions} from "vuex"

export default {
    data(){
      return{
        form:{
          id: '',
          title:'',
          preparationMinutes:'',
          extendedIngredients:[],
          servings:'',
          summary:'',
        },
         options: [
          { value: {name: 'Maçã', id:"1"},text:'Maçã'},
          { value: {name: 'Banana',id:"2"},text:'Banana'},
          { value: {name: 'Pera',id:"3"},text:'Pera'},
          { value: {name: 'Pão',id:"4"},text:'Pão'},
          { value: {name: 'Arroz',id:"5"},text:'Arroz'},
        ],
      }
    },
    methods: {
    ...mapActions(["addRecipes"]),
      createReceita(){
      this.addRecipes(this.form)
      this.$root.$emit('bv::hide::modal', 'modal-1', '#buttonModal')
    }
  },
};
</script>

<style>
#formTitle{
  margin-left:45%;
}
#formReceita{
  width:50%;
  margin-left: 25%;
}
</style>
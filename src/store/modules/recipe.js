import axios from "axios"


const state = {
    recipes: [],
    favouriteRecipes:[],
    searchedRecipes:[],
    recipeInfo: []
}

const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {number: '10'},
    headers: {
      'x-rapidapi-key': 'a7f606cc78msh727fdf8f92c6066p14f902jsn2a5449bfb172',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
const optionsSearch = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    headers: {
      'x-rapidapi-key': 'a7f606cc78msh727fdf8f92c6066p14f902jsn2a5449bfb172',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  const optionsRecipeInfo = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a7f606cc78msh727fdf8f92c6066p14f902jsn2a5449bfb172',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
const getters = {
    getRecipes: state => state.recipes,
    getFavouriteRecipes: state => state.favouriteRecipes,
    getSearchedRecipes: state => state.searchedRecipes
    
}

const actions = {
    retrivalRecipes({commit}){
        axios.request(options).then(function (response) {
            commit('getRecipes', response.data.recipes);
        }).catch(function (error) {
            console.error(error);
        });
    },
    addRecipes({ commit },data){
        commit('addRecipes', data)
    },
    deleteRecipes({commit},id){
        commit('deleteRecipes',id)
    },
    searchRecipes({commit},param){
        optionsSearch.params = {query: param,number:100}
        axios.request(optionsSearch).then(function (response) {
            console.log(response)
            commit('getSearchedRecipes',response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    },
    recipeInfo({commit},id){
        commit("recipeInfo",null)
        optionsRecipeInfo.url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`
        axios.request(optionsRecipeInfo).then(function (response) {
            console.log(response)
            commit('getSearchedRecipes',response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }

}

const mutations = {
    getRecipes: (state, data) => (state.recipes = data),
    addRecipes: (state ,data) =>(state.favouriteRecipes.push(data)),
    getSearchedRecipes:(state,data) =>(state.searchedRecipes = data),
    recipeInfo:(state,data) => (state.recipeInfo = data),
    deleteRecipes: (state,id) => (state.favouriteRecipes = state.favouriteRecipes.filter(p => p.id !== id))
}

export default {
    state,
    getters,
    actions,
    mutations
}

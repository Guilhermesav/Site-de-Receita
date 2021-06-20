import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Receita from './components/Receita'
import SuasReceitas from './components/SuasReceitas'
import PesquisaReceitas from './components/PesquisaReceitas'
 
Vue.use(VueRouter)
export default new VueRouter({
    mode :'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/receita/:id',
            name: 'receita',
            component: Receita
        },
        {
            path:'/',
            name:'suasreceitas',
            component: SuasReceitas
        },
        {
            path:'/',
            name:'pesquisareceitas',
            component: PesquisaReceitas
        }
    ]
});

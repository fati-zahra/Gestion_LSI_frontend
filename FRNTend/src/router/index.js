import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import note from '@/views/note.vue'
import pfe from '@/views/pfe.vue'
import planing from '@/views/planing.vue'
import prof from '@/views/prof.vue'
import etudiant from '@/views/etudiant.vue'


import createprof from '@/components/createprof.vue';
import editprof from '@/components/editprof.vue';
import allprof from '@/components/allprof.vue';

import AllProduct from '@/components/AllProduct.vue';
import CreateProduct from '@/components/CreateProduct.vue';
import EditProduct from '@/components/EditProduct.vue';

import alletu from '@/components/alletu.vue';
import editetu from '@/components/editetu.vue';
import createt from '@/components/createt.vue';

import createpfe from '@/components/createpfe.vue';
import editpfe from '@/components/editpfe.vue';
import allpfe from '@/components/allpfe.vue';


import allnote from '@/components/allnote.vue';
import editnote from '@/components/editnote.vue';
import creatnote from '@/components/creatnote.vue';


import createpl from '@/components/createpl.vue';
import editpl from '@/components/editpl.vue';
import allpl from '@/components/allpl.vue';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path: '/', component: Home},
  {path: '/Login', component: Login},
  {path: '/register', component: Register},
  {path: '/note', component: note},
  {path: '/pfe', component: pfe},
  {path: '/planing', component: planing},
  {path: '/prof', component: prof},
  {path: '/etudiant', component: etudiant},
  {path: '/note', component: note},
  {path: '/planing', component: planing},


  {
    name: 'hm',
    path: '/hm',
    component: AllProduct
},
{
  name: 'hmpr',
  path: '/hmpr',
  component: allprof
},
{
  name: 'createp',
  path: '/createp',
  component: createprof
},
{
  name: 'editprof',
  path: '/editprof',
  component: editprof
},
{
    name: 'create',
    path: '/create',
    component: CreateProduct
},
{
    name: 'edit',
    path: '/edit/:id',
    component: EditProduct
}, {
  name: 'hmet',
  path: '/hmet',
  component: alletu
}, {
  name: 'editetu',
  path: '/editetu',
  component: editetu
}, {
  name: 'createpfe',
  path: '/createpfe',
  component: createpfe
},
{
  name: 'editpfe',
  path: '/editpfe',
  component: editpfe
},{
  name: 'hmpfe',
  path: '/hmpfe',
  component: allpfe
},{
  name: 'createt',
  path: '/createt',
  component: createt
},
{
  name: 'hmnt',
  path: '/hmnt',
  component: allnote
}, {
  name: 'editnote',
  path: '/editnote',
  component: editnote
}, {
  name: 'creatnote',
  path: '/creatnote',
  component: creatnote
},
{
  name: 'hmpl',
  path: '/hmpl',
  component: allpl
}, {
  name: 'editpl',
  path: '/editpl',
  component: editpl
}, {
  name: 'createpl',
  path: '/createpl',
  component: createpl
},
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

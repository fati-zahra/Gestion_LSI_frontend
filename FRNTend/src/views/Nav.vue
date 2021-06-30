<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-info mb-4">
     <a class="navbar-brand" >MYLSI     <svg xmlns="http://www.w3.org/2000/svg"  width="50" height="50" fill="currentColor" class="bi bi-stack text-white mw-20" style="" viewBox="0 0 16 16">
  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
</svg></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-white">Home</router-link>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!user" >
          <li class="nav-item">
            <router-link to="/Login" class="nav-link text-white">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link text-white">Register</router-link>
          </li>
        </ul>

   <div  v-if="user"> <ul class="navbar-nav me-auto mb-2 mb-md-0" >
         <li class="nav-item">
            <router-link to="/note" class="nav-link text-white">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
     </svg>
      Gestion des note </router-link>
       </li>

 
 <li class="nav-item dropdown row text-white">
   <div class="col-1">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
           <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
         <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
         <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
       </svg> 
       </div>
       <div class="col-3">
            <a class="nav-link dropdown-toggle text-white" href="#" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">gestion des utilisateurs</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown06">
              <li><router-link  to="/prof" class="dropdown-item" href="#">gestion des profs</router-link></li>
              <li><router-link to="/etudiant" class="dropdown-item" href="#">gestion des etudiant </router-link></li>
            </ul>
        </div>
  </li>
 <li class="nav-item dropdown row text-white">
   <div class="col-1">            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
            <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"/>
            </svg>
            </div>
           <div class="col-3">
            <a class="nav-link dropdown-toggle text-white" href="#" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">gestion des modules</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown06">
              <li><router-link to="/create"  class="dropdown-item" href="#">ajouter des modules</router-link></li>
              <li><router-link to="/hm" class="dropdown-item" href="#">liste des modules </router-link></li>
            </ul>
        </div>  
 </li>

          <li class="nav-item">
            <router-link to="/pfe" class="nav-link text-white"> Gestion des PFE</router-link>
          </li>
          
          <li class="nav-item">
            <router-link to="/planing" class="nav-link text-white"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-day-fill" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.24 4.855a.428.428 0 1 0 0-.855.426.426 0 0 0-.429.43c0 .238.192.425.43.425zm.337.563h-.672v4.105h.672V8.418zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105z"/>
           </svg> Planing</router-link></li>
           <li class="nav-item">
            <a href="#"  class="nav-link text-white" @click="lg">Logout</a>
          </li>
          
        </ul></div>
      </div>
    </div>
  </nav>
</template>

<script >
import {mapGetters} from 'vuex'
 import axios from 'axios'

export default {

  name: "Nav",
//props:['user'],
 
methods: {

     lg() {

   axios.get('logout');
      // localStorage.removeItem('user');

    localStorage.removeItem('token');
        // this.user=false;

          this.$router.push('/login');

      
     // this.$store.dispatch('user', response.data);

}} ,
computed:{
    ...mapGetters(['user'])
}   

}

</script>

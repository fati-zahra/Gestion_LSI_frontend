
<template>
      <div  class="card"  style="width: 50rem;margin-left: 24%;">
            <form  class="" @submit.prevent="submit">


      <table v-for=" planing in planing" :key="planing.id" class="table bg-white shadow-lg p-3 mb-5 bg-body rounded">
            <thead>
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                <th>   {{planing.name}}  </th>
                <th>8:00 -10:00</th>
                <th>10:30 - 12:30</th>
                <th>13:00 - 15:00</th>
                <th> 15:30 - 17:00</th>

            </tr>
            </thead>
            <tbody class="shadow-lg p-3 mb-5 bg-body rounded">
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>LUNDI</td>
                <td> {{planing.salle}} || {{planing.modul1}}</td>                      
                 <td> {{planing.salle2}} || {{planing.modul2}}</td>
                <td>    {{planing.salle3}} || {{planing.modul3}}</td>
                 <td>  {{planing.salle4}} || {{planing.modul4}}</td>   

               </tr>
                   <tr class="shadow-lg p-3 mb-5 bg-body rounded">
               <td>MARDI</td>    
                <td>  {{planing.salle5}} || {{planing.modul5}}</td>   
                 <td> {{planing.salle6}} || {{planing.modul6}}</td>                      
                 <td> {{planing.salle7}} || {{planing.modul7}}</td>
                 <td>    {{planing.salle8}} || {{planing.modul8}}</td>
               </tr>

                <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>MERCREDI</td>
                      <td>  {{planing.salle9}} || {{planing.modul9}}</td>   
                 <td> {{planing.salle10}} || {{planing.modul10}}</td>                      
                 <td> {{planing.salle11}} || {{planing.modul11}}</td>
                 <td>    {{planing.salle12}}|| {{planing.modul12}}</td>

                    

               </tr>

               <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>JEUDI</td>
                 <td> {{planing.salle13}} || {{planing.modul13}}</td>                      
                 <td> {{planing.salle14}} || {{planing.modul14}}</td>
                <td>    {{planing.salle15}} || {{planing.modul15}}</td>
                 <td>  {{planing.salle16}} || {{planing.modul16}}</td>   

                   

               </tr>

                <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td> VENDREDI</td>
                     <td></td>
                     <td></td>
                     <td></td>
                    <td></td>



               </tr>
    <tr> 
 <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editpl', params: { id: planing.id_pl }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deletePlaning(planing.id_pl)">Delete</button>
                    </div>
                </td>

    </tr>   
               
                
            </tbody>
              
        </table>

            </form>
              <div class="">
<button type="button" class="btn btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
</svg>
<router-link to="/createpl" class="text-dark">    nouveau</router-link>
              </button>
    </div>

      </div>
        </template>

<script>
 import axios from 'axios'
export default {
 
            
        data() {
            return {
                planing: [],
                
 
            }
        },
            created() {
            axios.get(`planing`)
                .then((res) => {
                    this.planing = res.data;
                }),                             
    axios.get(`etudiant`)
                .then((res) => {
                    this.etudiant = res.data}),

                     axios.get(`module`)
                .then((res) => {
                    this.module = res.data})
                },     
      
        methods: {
   liste() {
  axios.get('planing').then(
 response => {
 this.planing = response.data;
 }
  )
  
} ,
   listem() {
  axios.get('module').then(
 response => {
 this.module = response.data;
 }
  )
  
} ,

   
            deletePlaning(id_pl) { 
                     
                   axios.delete(`deletepl/${id_pl}`)
                    .then(
                        response => {
                        let i = this.planing.map(data => data.id_pl).indexOf(id_pl);
                        this.planing.splice(i, 1)
                        response;

                    });
            }




}}
</script>



<template>
<div>
    <div  class="card" style="width: 50rem;margin-left: 24%;">
      <button class="w-10 btn btn-lg btn-info" @click="liste">  liste des etudiants</button>
 
        <table class="table bg-white shadow-lg p-3 mb-5 bg-body rounded">
            <thead>
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                <th>ID</th>
                <th>Name</th>
                <th>email</th>
                 <th>CNE</th>

                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody class="shadow-lg p-3 mb-5 bg-body rounded">
            <tr v-for="etudiant in etudiant" :key="etudiant.id"  class="shadow-lg p-3 mb-5 bg-body rounded" >
                <td>{{ etudiant.id_etu }}</td>
                <td>{{ etudiant.fullname }}</td>
               <td>{{ etudiant.email }}</td>
                <td>{{ etudiant.cne }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editetu', params: { id: etudiant.id_etu}}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteProduct(etudiant.id_etu)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

     <div class="">
<button type="button" class="btn btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
</svg>
<router-link to="/createt" class="text-dark">    nouveau</router-link>
              </button>
    </div>
</div>
</template>
 
<script>
 import axios from 'axios'

    export default {
        data() {
            return {
                etudiant: []
            }
        },
       created() {
            axios.get(`etudiant`)
                .then((res) => {
                    this.etudiant = res.data;
                })},
        methods: {

             liste() {
  axios.get('etudiant').then(
 response => {
 this.module = response.data;
 }
  )
  
} ,
            deleteProduct(id_etu) { 
                     
                   axios.delete(`delete_etu/${id_etu}`)
                    .then(
                        response => {
                        let i = this.etudiant.map(data => data.id_etu).indexOf(id_etu);
                        this.etudiant.splice(i, 1)
                        response;

                    });
            }
        }
    }
</script>

<template>
<div class="row">
    <div  class="card " style="width: 50rem;margin-left: 24%;">
      <button class="w-10 btn btn-lg btn-info" @click="liste">  liste des PFE</button>
 
        <table class="table bg-white shadow-lg p-3 mb-5 bg-body rounded">
            <thead>
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                <th>ID</th>
                <th>subject</th>
                <th>  prof</th>
                <th>etudiant</th>

                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody class="shadow-lg p-3 mb-5 bg-body rounded">
            <tr v-for="pfe in pfe" :key="pfe.id"  class="shadow-lg p-3 mb-5 bg-body rounded" >
                <td>{{ pfe.id_pfe }}</td>
                <td>{{ pfe.subject }}</td>
                 <td>{{ pfe.profsr }}</td>
                 <td>{{ pfe.etu }}</td>

                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editpfe', params: { id: pfe.id_pfe }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteProduct(pfe.id_pfe)">Delete</button>
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
<router-link to="/createpfe" class="text-dark">    nouveau</router-link>
              </button>
    </div>
</div>
</template>
 
<script>
 import axios from 'axios'

    export default {
        data() {
            return {
                pfe: []
            }
        },
       created() {
            axios.get(`pfe`)
                .then((res) => {
                    this.pfe = res.data;
                })},
        methods: {
   liste() {
  axios.get('pfe').then(
 response => {
 this.pfe = response.data;
 }
  )
  
} ,
            deleteProduct(id_pfe) { 
                     
                   axios.delete(`deletepfe/${id_pfe}`)
                    .then(
                        response => {
                        let i = this.pfe.map(data => data.id_pfe).indexOf(id_pfe);
                        this.pfe.splice(i, 1)
                        response;

                    });
            }
        }
    }
</script>

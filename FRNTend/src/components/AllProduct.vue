<template>
<div>
    <div  class="card" style="width: 50rem;margin-left: 24%;">
      <button class="w-10 btn btn-lg btn-info" @click="liste">  liste des modules</button>
 
        <table class="table bg-white shadow-lg p-3 mb-5 bg-body rounded">
            <thead>
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                <th>ID</th>
                <th>Name</th>
                <th>nbr des heures</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody class="shadow-lg p-3 mb-5 bg-body rounded">
            <tr v-for="module in module" :key="module.id"  class="shadow-lg p-3 mb-5 bg-body rounded" >
                <td>{{ module.id_m }}</td>
                <td>{{ module.name }}</td>
                <td>{{ module.nbrh }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: module.id_m }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteProduct(module.id_m)">Delete</button>
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
<router-link to="/create" class="text-dark">    nouveau</router-link>
              </button>
    </div>
</div>
</template>
 
<script>
 import axios from 'axios'

    export default {
        data() {
            return {
                module: []
            }
        },
       created() {
            axios.get(`module`)
                .then((res) => {
                    this.module = res.data;
                })},
        methods: {
   liste() {
  axios.get('module').then(
 response => {
 this.module = response.data;
 }
  )
  
} ,
            deleteProduct(id_m) { 
                     
                   axios.delete(`deletem/${id_m}`)
                    .then(
                        response => {
                        let i = this.module.map(data => data.id_m).indexOf(id_m);
                        this.module.splice(i, 1)
                        response;

                    });
            }
        }
    }
</script>

<template>
<div>
    <div  class="card" style="width: 50rem;margin-left: 24%;">
      <button class="w-10 btn btn-lg btn-info" @click="liste"> liste des profs</button>
 
        <table class="table bg-white shadow-lg p-3 mb-5 bg-body rounded">
            <thead>
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                <th>ID</th>
                <th>Name</th>
                <th>email</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody class="shadow-lg p-3 mb-5 bg-body rounded">
            <tr v-for="prof in prof" :key="prof.id"  class="shadow-lg p-3 mb-5 bg-body rounded" >
                <td>{{ prof.id_p }}</td>
                <td>{{ prof.fullname }}</td>
                <td>{{ prof.email }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editprof', params: { id: prof.id_p}}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteProduct(prof.id_p)">Delete</button>
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
<router-link to="/createp" class="text-dark">    nouveau</router-link>
              </button>
    </div>
</div>
</template>
 
<script>
 import axios from 'axios'

    export default {
            
        data() {
            return {
                prof: []
            }
        },
         created() {
            axios.get(`prof`)
                .then((res) => {
                    this.prof = res.data;
                })},

      
        methods: {
   liste() {
  axios.get('prof').then(
 response => {
 this.prof = response.data;
 }
  )
  
} ,
            
            deleteProduct(id_p) { 
                     
                   axios.delete(`deletep/${id_p}`)
                    .then(
                        response => {
                        let i = this.prof.map(data => data.id_p).indexOf(id_p);
                        this.prof.splice(i, 1)
                        response;

                    });
            }
        }
    }
</script>

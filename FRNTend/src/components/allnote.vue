<template>
<div>
    <div  class="card" style="width: 78rem;margin-left: 10%;">
      <button class="w-10 btn btn-lg btn-info" @click="la">  liste des notes</button>
 
        <table class="table bg-white shadow-lg p-3 mb-5 bg-body rounded">
            <thead>
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
               <th>ID</th>
               <th>ETUDIANT</th>
               <th>MODULE 1</th>
               <th>MODULE 2</th>
                <th>MODULE 3</th>
                <th>MODULE 4</th>
                <th>MODULE 5</th>
                <th>MODULE 6</th>
              
            </tr>
            </thead>
            <tbody class="shadow-lg p-3 mb-5 bg-body rounded">
            <tr v-for="note in note" :key="note.id"  class="shadow-lg p-3 mb-5 bg-body rounded" >
                <td>{{ note.id_nt}}</td>
                <td>{{ note.etu}}</td>

                <td>{{note.modul1}}  :{{ note.note}} </td>
                <td>{{note.modul2}}  :{{ note.not2 }}</td>
                <td>{{note.modul3}}  :{{ note.not3 }}</td>
                <td>{{note.modul4}}  :{{ note.not4 }}</td>
                <td>{{note.modul5}}  :{{ note.not5 }}</td>
                <td>{{note.modul6}}  :{{ note.not6 }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editnote', params: { id: note.id_nt}}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deletenote(note.id_nt)">Delete</button>
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
<router-link to="/creatnote" class="text-dark">    nouveau</router-link>
              </button>
    </div>
</div>
</template>
 
<script>
 import axios from 'axios'

    export default {
 
            
        data() {
            return {
                note: [],
                
 
            }
        },
            created() {
            axios.get(`note`)
                .then((res) => {
                    this.note = res.data;
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
  axios.get('note').then(
 response => {
 this.note = response.data;
 }
  )
  
} ,
la(){
    console.log(this.note)
},
   
            deletenote(id_nt) { 
                     
                   axios.delete(`deleten/${id_nt}`)
                    .then(
                        response => {
                        let i = this.note.map(data => data.id_nt).indexOf(id_nt);
                        this.note.splice(i, 1)
                        response;

                    });
            }




}}
</script>

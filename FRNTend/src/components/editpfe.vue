<template>
<div class="card" style="width: 40rem;margin-left: 30%;">
  <form  class="" @submit.prevent="updatePfe">
     <input v-model="pfe.subject" class="form-control shadow-lg p-3 mb-3 bg-body rounded" placeholder="subject" required>
           <select  v-model="pfe.etu" class="form-select bg-white shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
              <option  v-for="etudiant in etudiant" :key="etudiant.id"> <span  > {{ etudiant.fullname}}</span></option>
          </select>   

     <select   v-model="pfe.profsr" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
          <option  v-for="prof in prof" :key="prof.id">{{ prof.fullname}}</option>
     </select>
    <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">update </button>
  </form>
</div>
</template>
<script>
 import axios from 'axios'

    export default {
        data() {
            return {
                pfe: {},
                prof: [],
                etudiant:[]
    }
  },
   created() {
            axios.get(`prof`)
                .then((res) => {
                    this.prof = res.data;
                }),                             
    axios.get(`etudiant`)
                .then((res) => {
                    this.etudiant = res.data})
                },
        methods: {
          listep() {
  axios.get('prof').then(
 response => {
 this.prof = response.data;
 }
  ) 
} ,
 liste() {
  axios.get('etudiant').then(
 response => {
 this.etudiant = response.data;
 }
  ) 
} ,
         updatePfe() {
            axios.put(`updatepfe/${this.$route.params.id}`,
            this.pfe
                    ).then((res) => {
                        this.$router.push({ name: 'hmpfe' });
                        res;
                    });
            }
        }
    }
</script>

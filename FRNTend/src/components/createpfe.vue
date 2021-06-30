<template>
<div class="card" style="width: 40rem;margin-left: 30%;">
  <form  class="" @submit.prevent="submit">
     <input v-model="subject" class="form-control shadow-lg p-3 mb-3 bg-body rounded" placeholder="subject" required>
           <select  v-model="etu" class="form-select bg-white shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
              <option  v-for="etudiant in etudiant" :key="etudiant.id"> <span  > {{ etudiant.fullname}}</span></option>
          </select>   

     <select   v-model="profsr" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
          <option  v-for="prof in prof" :key="prof.id">{{ prof.fullname}}</option>
     </select>





    <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">create </button>
  </form>
</div>
</template>
<script >
 import axios from 'axios'
export default {
  props:['user'],
  data() {
    return{
     subject: '',
    profsr: '',
    etu: '',
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
methods:{
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
   async submit(){
  const response = await axios.post('createpfe', {

    subject: this.subject,
        profsr: this.profsr, 
       etu: this.etu 
 
  });
  
      this.$router.push('hmpfe');

  console.log(response);
}}}

</script>
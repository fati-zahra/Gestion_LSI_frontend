<template>
<div class="card" style="width: 40rem;margin-left: 30%;">
  <form  class="" @submit.prevent="submit">

    <input v-model="name" class="form-control shadow-lg p-3 mb-3 bg-body rounded" placeholder="module" required>

    <input v-model="nbrh"  class="form-control shadow-lg p-3 mb-3 bg-body rounded " placeholder="nbr des heures" required>


    <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">create </button>
  </form>
</div>
</template>
<script >
 import axios from 'axios'
export default {
  name: "module",
  props:['user'],
  data() {
    return{
     name: '',
     nbrh: ''
    }
  },
methods:{
   async submit(){
  const response = await axios.post('http://localhost:8000/api/createm', {

    name: this.name,
    nbrh: this.nbrh
  });
  <div class="alert alert-success" role="alert">
module cree</div>
      this.$router.push('hm');

  console.log(response);
},
 

}
}

</script>
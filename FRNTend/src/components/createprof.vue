<template>
<div class="card" style="width: 40rem;margin-left: 30%;">
  <form  class="" @submit.prevent="submit">

    <input v-model="fullname" class="form-control shadow-lg p-3 mb-3 bg-body rounded" placeholder="fullname" required>

    <input v-model="email" type="email" class="form-control shadow-lg p-3 mb-3 bg-body rounded " placeholder="email" required>


    <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">create </button>
  </form>
</div>
</template>
<script >
 import axios from 'axios'
export default {
  //name: "module",
  props:['user'],
  data() {
    return{
     fullname: '',
     email: ''
    }
  },
methods:{
   async submit(){
  const response = await axios.post('createp', {

    fullname: this.fullname,
    email: this.email
  });
  
      this.$router.push('hmpr');

  console.log(response);
},
 

}
}

</script>
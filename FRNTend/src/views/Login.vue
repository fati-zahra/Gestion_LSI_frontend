<template>
  <form  class="c" @submit.prevent="submit">
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor"  id="c" class="bi bi-person-fill text-white bg-info" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
    <input v-model="email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-info" type="submit">Sign in</button>
  </form>
</template>

<script>


 import axios from 'axios'

export default {
  
  name: 'Login',
  data() {
    return{
      email: '',
      password: '',
    }
  },
methods: {

   async submit(){
  const response = await axios.post('http://localhost:8000/api/login', {
    email: this.email,
    password: this.password
  });
localStorage.setItem('token' , response.data.token);
      // this.$store.dispatch('login', { email, password })

  // this.$store.dispatch('user', response.data.user);
      this.$router.push('/');


}
}
}


  </script>
  <style>
  #c{
margin-left: 30%;
margin-bottom: 10%;

  }
  </style>
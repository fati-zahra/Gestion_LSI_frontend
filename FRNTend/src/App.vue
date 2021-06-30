<template>
<div>
  <Nav />
    <main class="form-signin">

   <router-view />
  </main>
</div>
</template>

<script>

import Nav from "@/views/Nav";
import axios from 'axios'

export default {
  components: {Nav},
 /*data () {
    return {
      user: null
    }},*/

  async created() {
   const response = await axios.get('get_user');
 
  
      this.$store.dispatch('user', response.data);
               // localStorage.setItem('user', JSON.stringify(response.data));

  }
}
</script>

<style>
 .c{ 
  width: 100%;
  max-width: 330px;
  padding: 15px;
   margin: auto; 
}
/*
.form-signin .checkbox {
  font-weight: 400;
}*/

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
 } 
</style>

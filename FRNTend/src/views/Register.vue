<template>
  <form  class="c" @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <input v-model="name" class="form-control" placeholder="Name" required>

    <input v-model="email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-info" type="submit">Submit</button>
  </form>
</template>

<script >
  import axios from 'axios'

export default {

  name: 'Register',
  data() {
    return{
      name: '',
      email: '',
      password: ''
    }
  },
methods: {
   async submit(){
  const response = await axios.post('register', {
    name: this.name,
    email: this.email,
    password: this.password
  });

  console.log(response);
  this.$router.push('/login');
}
}
}
</script>
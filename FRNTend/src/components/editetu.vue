<template>
<div class="card" style="width: 40rem;margin-left: 30%;">
  <form  class="" @submit.prevent="updateProduct">

    <input v-model="etudiant.fullname" class="form-control shadow-lg p-3 mb-3 bg-body rounded" placeholder="fullname" required>
    <input v-model="etudiant.email"  type="email" class="form-control shadow-lg p-3 mb-3 bg-body rounded " placeholder="  email" required>

    <input v-model="etudiant.cne"  class="form-control shadow-lg p-3 mb-3 bg-body rounded " placeholder="  cne" required>


    <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">update</button>
  </form>
</div>
</template>
<script>
 import axios from 'axios'

    export default {
        data() {
            return {
                etudiant: {},
               
            }
        },
       
        methods: {
            updateProduct() {
            axios.put(`update_etu/${this.$route.params.id}`,
            this.etudiant
                    ).then((res) => {
                        this.$router.push({ name: 'hmet' });
                        res;
                    });
            }
        }
    }
</script>

<template>
<div class="card" style="width: 40rem;margin-left: 30%;">
  <form  class="" @submit.prevent="updateProduct">

    <input v-model="module.name" class="form-control shadow-lg p-3 mb-3 bg-body rounded" placeholder="module" required>

    <input v-model="module.nbrh"  class="form-control shadow-lg p-3 mb-3 bg-body rounded " placeholder="nbr des heures" required>


    <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">update</button>
  </form>
</div>
</template>
<script>
 import axios from 'axios'

    export default {
        data() {
            return {
                module:{},
               
            }
        },
       
        methods: {
            updateProduct() {
            axios.put(`updatem/${this.$route.params.id}`,
            this.module
                    ).then((res) => {
                        this.$router.push({ name: 'hm' });
                        res;
                    });
            }
        }
    }
</script>

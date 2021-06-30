<template>
<div class="card" style="width: 40rem;margin-left: 30%;">
  <form  class="" @submit.prevent="updateProf">

    <input v-model="prof.fullname" class="form-control shadow-lg p-3 mb-3 bg-body rounded" placeholder="nom du prof" required>

    <input v-model="prof.email"  class="form-control shadow-lg p-3 mb-3 bg-body rounded " placeholder=" email" required>


    <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">update</button>
  </form>
</div>
</template>
<script>
 import axios from 'axios'

    export default {
        data() {
            return {
                prof: {},
               
            }
        },
       
        methods: {
            updateProf() {
            axios.put(`updatep/${this.$route.params.id}`,
            this.prof
                    ).then((res) => {
                        this.$router.push({ name: 'hmpr' });
                        res;
                    });
            }
        }
    }
</script>

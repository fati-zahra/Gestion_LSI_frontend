<template>
    <div  class="card " style="width: 79rem;margin-left: 8%;">
 <form  class="" @submit.prevent="updatenote">

        <table class="table bg-white shadow-lg p-3 mb-5 bg-body rounded">
            <thead>
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                <th> 

                </th>

                <th >
                    <select  v-model="note.modul1" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                    <option  v-for="module in module" :key="module.id"> <span  > {{ module.name}}</span></option>
                    </select>
                </th>

                 <th >
                    <select   v-model="note.modul2" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                      <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                    </select>
                </th>
                
                 <th >
                    <select   v-model="note.modul3" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                            <option  v-for="module in module" :key="module.id">{{ module.name}}</option>
                    </select>
                </th> 
                
                <th >
                    <select   v-model="note.modul4" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="module in module" :key="module.id">{{ module.name}}</option>
                    </select>
                </th> 
                
                <th >
                    <select   v-model="note.modul5" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                      <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                    </select>
                </th>
                
                 <th >
                    <select   v-model="note.modul6" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                      <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                    </select>

                </th>
         </tr>
     </thead>
     <tbody class="shadow-lg p-3 mb-5 bg-body rounded">
            <tr  class="shadow-lg p-3 mb-5 bg-body rounded" >     
                <td>
                  
                  <select   v-model="note.etu" class="form-select shadow-lg p-3 mb-4 bg-body rounded" aria-label="Default select example">
                          <option   v-for=" etudiant in etudiant" :key="etudiant.id" >{{ etudiant.fullname}}</option>
                    </select>

                </td>

                <td> 
                      <select  v-model="note.note"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select    v-model="note.not2" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select    v-model="note.not3" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select  v-model="note.not4"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select   v-model="note.not5" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select  v-model="note.not6"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
            </tr>
        </tbody>
                    <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">save change </button>

     </table>


</form>

</div>
</template>
 
<script>
 import axios from 'axios'
export default {
  props:['user'],
  data() {
    return{
       

     note:{},
     module:[],
     etudiant:[]
    }
  },

   created() {
                                   
    axios.get(`etudiant`)
                .then((res) => {
                    this.etudiant = res.data}),

                     axios.get(`module`)
                .then((res) => {
                    this.module = res.data})
                },    
                               
methods:{
 


         updatenote() {
            axios.put(`updaten/${this.$route.params.id}`,
            this.note


                    ).then((res) => {
                        this.$router.push({ name: 'hmnt' });
                        res;
                    });
            }


}}
</script>

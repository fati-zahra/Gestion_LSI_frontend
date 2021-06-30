
<template>
      <div  class="card"  style="width: 50rem;margin-left: 24%;">
            <form  class="" @submit.prevent="updateplaning">

      <input v-model="planing.name" class="form-control shadow-lg p-3 mb-3 bg-body rounded" placeholder="nom du planing" required>

      <table class="table bg-white shadow-lg p-3 mb-5 bg-body rounded">
            <thead>
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                <th>     </th>
                <th>8:00 -10:00</th>
                <th>10:30 - 12:30</th>
                <th>13:00 - 15:00</th>
                <th> 15:30 - 17:00</th>

            </tr>
            </thead>
            <tbody class="shadow-lg p-3 mb-5 bg-body rounded">
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>LUNDI</td>
                      <td>
                           <select   v-model="planing.modul1" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="planing.salle" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>
                 
                      <td>
                           <select   v-model="planing.modul2" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="planing.salle2" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                       <td>
                           <select   v-model="planing.modul3" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle3"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                   <td>
                           <select   v-model="planing.modul4" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle4"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

               </tr>
                   <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>MARDI</td>
                      <td>
                           <select   v-model="planing.modul5" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="planing.salle5" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>
                 
                      <td>
                           <select   v-model="planing.modul6" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="planing.salle6" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                       <td>
                           <select   v-model="planing.modul7" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="planing.salle7" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                   <td>
                           <select   v-model="planing.modul8" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="planing.salle8" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

               </tr>

                <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>MERCREDI</td>
                      <td>
                           <select   v-model="planing.modul9" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle9" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>
                 
                      <td>
                           <select   v-model="planing.modul10" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle10" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                       <td>
                           <select   v-model="planing.modul11" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle11" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                   <td>
                           <select   v-model="planing.modul12" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle12" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

               </tr>

               <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>JEUDI</td>
                      <td>
                           <select   v-model="planing.modul13" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle13" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>
                 
                      <td>
                           <select   v-model="planing.modul14" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle14" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                       <td>
                           <select   v-model="planing.modul15" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle15" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                   <td>
                           <select   v-model="planing.modul16" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle16" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

               </tr>

                <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td> <ChildComponent v-model="jour" >VENDREDI</ChildComponent>
                      <td>
                           <select   v-model="modul" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>
                 
                      <td>
                           <select   v-model="modul" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select  v-model="salle"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                       <td>
                           <select   v-model="modul" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select  v-model="salle"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                   <td>
                           <select   v-model="modul" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="planing.salle" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

               </tr>

               
                
            </tbody>
        </table>

            <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">save changes </button>
            </form>
      </div>
        </template>

<script>
 import axios from 'axios'
export default {
  props:['user'],
  data() {
    return{
     planing:{},
     module:[],
    }
  },
   created() {
                     axios.get(`module`)
                .then((res) => {
                    this.module = res.data})
                },                       
methods:{

  
         updateplaning() {
            axios.put(`updatepl/${this.$route.params.id}`,
            this.planing


                    ).then((res) => {
                        this.$router.push({ name: 'hmpl' });
                        res;
                    });
            }}}
</script>



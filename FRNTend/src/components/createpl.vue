
<template>
      <div  class="card"  style="width: 50rem;margin-left: 24%;">
            <form  class="" @submit.prevent="submit">

      <input v-model="name" class="form-control shadow-lg p-3 mb-3 bg-body rounded" placeholder="nom du planing" required>

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
                           <select   v-model="modul1" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="salle" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>
                 
                      <td>
                           <select   v-model="modul2" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="salle2" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                       <td>
                           <select   v-model="modul3" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle3"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                   <td>
                           <select   v-model="modul4" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle4"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

               </tr>
                   <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>MARDI</td>
                      <td>
                           <select   v-model="modul5" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="salle5" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>
                 
                      <td>
                           <select   v-model="modul6" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="salle6" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                       <td>
                           <select   v-model="modul7" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="salle7" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                   <td>
                           <select   v-model="modul8" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select    v-model="salle8" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

               </tr>

                <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>MERCREDI</td>
                      <td>
                           <select   v-model="modul9" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle9" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>
                 
                      <td>
                           <select   v-model="modul10" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle10" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                       <td>
                           <select   v-model="modul11" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle11" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                   <td>
                           <select   v-model="modul12" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle12" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

               </tr>

               <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                      <td>JEUDI</td>
                      <td>
                           <select   v-model="modul13" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle13" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>
                 
                      <td>
                           <select   v-model="modul14" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle14" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                       <td>
                           <select   v-model="modul15" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle15" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

                   <td>
                           <select   v-model="modul16" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                          </select>
                           
                         <select   v-model="salle16" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
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
                           
                         <select   v-model="salle" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                <option  v-for="number in 10" :key="number.id">{{ number}}</option>
                        </select>
                 </td>

               </tr>

               
                
            </tbody>
        </table>

            <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">create </button>
            </form>
      </div>
        </template>

<script>
 import axios from 'axios'
export default {
  props:['user'],
  data() {
    return{
  salle:'',
    salle2:'',
  salle3:'',
  salle4:'',
  salle5:'',
  salle6:'',
  salle7:'',
  salle8:'',
  salle9:'',
  salle10:'',
  salle11:'',
  salle12:'',
  salle13:'',
  salle14:'',
  salle15:'',
  salle16:'',
  modul1:'',
  modul2:'',
  modul3:'',
  modul4:'',
  modul5:'',
  modul6:'',
  modul7:'',
  modul8:'',
  modul9:'',
  modul10:'',
  modul11:'',
  modul12:'',
  modul13:'',
  modul14:'',
  modul15:'',
  modul16:'',

  name:'',
  modul:'',
     module:[],
    }
  },
   created() {
                     axios.get(`module`)
                .then((res) => {
                    this.module = res.data})
                },                       
methods:{

   async submit(){

  const response = await axios.post('createpl', {

    name: this.name,
    modul1: this.modul1,
    modul2: this.modul2,
    modul3: this.modul3,
    modul4: this.modul4,
    modul5: this.modul5,
    modul6: this.modul6,
    modul7: this.modul7,
    modul8: this.modul8,
    modul9: this.modul9,
    modul10: this.modul10,
    modul11: this.modul11,
    modul12: this.modul12,
    modul13: this.modul13,
    modul14: this.modul14,
    modul15: this.modul15,
    modul16: this.modul16,

salle:this.salle,
salle2:this.salle2,
salle3:this.salle3,
salle4:this.salle4,
salle5:this.salle5,
salle6:this.salle6,
salle7:this.salle7,
salle8:this.salle8,
salle9:this.salle9,
salle10:this.salle10,
salle11:this.salle11,
salle12:this.salle12,
salle13:this.salle13,
salle14:this.salle14,
salle15:this.salle15,
salle16:this.salle16,



 
  });
  
      this.$router.push('hmpl');

  console.log(response);
}}}
</script>



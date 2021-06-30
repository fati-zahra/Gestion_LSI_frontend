<template>
    <div  class="card " style="width: 79rem;margin-left: 8%;">
 <form  class="" @submit.prevent="submit">

        <table class="table bg-white shadow-lg p-3 mb-5 bg-body rounded">
            <thead>
                            <tr class="shadow-lg p-3 mb-5 bg-body rounded">            
                 <th > ETUDIANT </th>
                 <th > MODULE1 </th>
                 <th > MODULE2 </th>
                 <th > MODULE3 </th>
                 <th > MODUL4 </th>
                <th > MODULE5 </th>
                <th > MODULE6 </th>    
                            </tr>
            <tr class="shadow-lg p-3 mb-5 bg-body rounded">
                <th> </th>

                

                <th >
                    <select  v-model="modul1" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                                    <option  v-for="module in module" :key="module.id"> <span  > {{ module.name}}</span></option>
                    </select>
                </th>

                 <th >
                    <select   v-model="modul2" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                      <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                    </select>
                </th>
                
                 <th >
                    <select   v-model="modul3" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                            <option  v-for="module in module" :key="module.id">{{ module.name}}</option>
                    </select>
                </th> 
                
                <th >
                    <select   v-model="modul4" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="module in module" :key="module.id">{{ module.name}}</option>
                    </select>
                </th> 
                
                <th >
                    <select   v-model="modul5" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                      <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                    </select>
                </th>
                
                 <th >
                    <select   v-model="modul6" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                      <option v-for=" module in module" :key="module.id">{{ module.name}}</option>
                    </select>

                </th>
         </tr>
     </thead>
     <tbody class="shadow-lg p-3 mb-5 bg-body rounded">
            <tr  class="shadow-lg p-3 mb-5 bg-body rounded" >     
                <td>
                  
                  <select   v-model="etu" class="form-select shadow-lg p-3 mb-4 bg-body rounded" aria-label="Default select example">
                          <option   v-for=" etudiant in etudiant" :key="etudiant.id" >{{ etudiant.fullname}}</option>
                    </select>

                </td>

                <td> 
                      <select  v-model="note"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select    v-model="not2" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select    v-model="not3" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select  v-model="not4"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select   v-model="not5" class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
                   <td> 
                      <select  v-model="not6"  class="form-select shadow-lg p-3 mb-3 bg-body rounded" aria-label="Default select example">
                          <option  v-for="number in 20" :key="number.id">{{ number}}</option>
                    </select>
                </td>
            </tr>
        </tbody>
                    <button class="w-100 btn btn-lg btn-info shadow-lg p-3 mb-2  rounded " type="submit">save </button>

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
  modul1:'',
 modul2:'',
  modul3:'',
  modul4:'',
  modul5:'',
  modul6:'',
  etu:'',
  note:'',
  not1:'',
  not2:'',
  not3:'',
  not4:'',
  not5:'',
  not6:'',


     module:[],
     etudiant:[]
    }
  },
   created() {
            axios.get(`prof`)
                .then((res) => {
                    this.prof = res.data;
                }),                             
    axios.get(`etudiant`)
                .then((res) => {
                    this.etudiant = res.data}),

                     axios.get(`module`)
                .then((res) => {
                    this.module = res.data})
                },                       
methods:{
 
 liste() {
  axios.get('etudiant').then(
 response => {
 this.etudiant = response.data;
 }
  ) 
} ,

   async submit(){
  const response = await axios.post('createn', {
    note: this.note, 
    not2: this.not2, 
    not3: this.not3, 
    not4: this.not4, 
    not5: this.not5, 
    not6: this.not6, 

    modul1: this.modul1,
    modul2: this.modul2,
    modul3: this.modul3,
    modul4: this.modul4,
    modul5: this.modul5,
    modul6: this.modul6,
       etu: this.etu 
 
  });
  
      this.$router.push('hmnt');

  console.log(response);
}}}
</script>

<template>
 <div class="row">
    <form class="col s4" @submit.prevent="sendStudent">
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Name"  type="text" class="validate" v-model="Student.name">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="School" type="text" class="validate" v-model="Student.school">
        </div>
      </div>

    <template v-if="!edit">
        <button  class="btn waves-effect waves-light" ><i class="material-icons">send</i></button>
    </template>
    <template v-else>
            <button class="btn waves-effect waves-light" ><i class="material-icons">system_update_alt</i></button>
    </template>


    </form>
    <div class="col s8">
         <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>School</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="st of Students" :key="st._id">
            <td >{{st.name}}</td>
            <td>{{st.school}}</td>
            <td> 
                   <button class="btn waves-effect waves-light red darken-1 " @click="deleteStudent(st._id)"><i class="material-icons">delete</i></button>
            </td>
            <td>
             <button class="btn waves-effect waves-light   cyan darken-1" @click="editStudent(st._id)"><i class="material-icons">system_update_alt</i></button>

            </td>
          </tr>
    
        </tbody>
      </table>
            
    </div>
  </div>
</template>

<script>
    
    export default{
        data(){
            return{
                Student:{
                    name: '',
                    school: '',
                    edit: false,
                    idStudent: ''
                },
                Students: []
            }
        },
        created(){
            this.getStudent();
        },
        methods:{
            getStudent(){
                fetch('/student')
                .then(res=>res.json())
                .then(data => {
                    this.Students = data;
                    console.log(this.Students);
                });
            },
            sendStudent(){

                if(!this.edit){
                    fetch('/student',{
                    method: 'POST',
                    body: JSON.stringify(this.Student),
                    headers:{
                        'Accept' : 'application/json',
                        'Content-type' : 'application/json'
                        }
                    }).then(res => res.json())
                    .then(data=>{
                        this.getStudent()
                    })
                }else{ //Update
                    fetch('/student/'+this.idStudent,{
                        method: 'PUT',
                        body: JSON.stringify(this.Student),
                        headers:{
                            'Accept' : 'application/json',
                            'Content-type' : 'application/json'
                        }
                    }).then(res => res.json())
                    .then(data=>{
                        this.getStudent(),
                        this.edit = !this.edit
                    })
                
                }
                this.Student.name = '',
                this.Student.school = ''
            },
            deleteStudent(id){
                fetch('/student/'+id,{
                    method: 'DELETE',
                   headers:{
                        'Accept' : 'application/json',
                        'Content-type' : 'application/json'
                    }
                }).then(res => res.json())
                .then(data => {
                    this.getStudent()
                })
            },
            editStudent(id){
                fetch('/student/'+id)
                .then(res => res.json())
                .then(data => {
                    this.Student.name = data.name,
                    this.Student.school = data.school
                    this.edit = true,
                    this.idStudent = data._id
                })
            }
        }
    }
</script>
<template>
    
    <div id="modal-registrer" class="modal">
      <div class="modal-content">
        <h4 class="header center orange-text">Registrarse</h4>
        <select style="display: block;" v-model="tipo_s">
            <option value=""  selected   >Eres un </option>
            <option value="1">Alumno</option>
            <option value="2">Profesor</option>
        </select>
        <template v-if="tipo_s.length > 0 ">
            
            <template v-if="tipo_s == 1">
                
                <form class="col s5" @submit.prevent="register">
                    <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Correo electrónico"  type="email" class="validate" v-model="User.user" >
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Contraseña"  type="password" class="validate" v-model="User.pass">
                    </div>
                </div>
            
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Ingresa tu contraseña"  type="password" class="validate" v-model="v_pass">
                    </div>
                </div>    
                <div v-if="User.pass != v_pass && User.pass.length >= 8">
                    <h2 style="color: red; font-size: 12px;">Las contraseñas deben ser iguales!!</h2>
                </div>
                  <div v-if="User.pass == v_pass && User.pass.length >= 8">
                    <h2 style="color: green;font-size: 12px;">Contraseñas iguales</h2>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Name"  type="text" class="validate" v-model="User.name">
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="School" type="text" class="validate" v-model="User.school">
                    </div>
                </div>
                <div class="center">
                    <button class="btn waves-effect waves-light btn blue lighten-1" ><i class="material-icons">people</i></button>
                </div>  
                </form>
            </template>
            <template v-else>
                 <form class="col s5" @submit.prevent="register">
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Correo electrónico"  type="email" class="validate" v-model="User.user" >
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Contraseña"  type="password" class="validate" v-model="User.pass">
                    </div>
                </div>
            
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Ingresa tu contraseña"  type="password" class="validate" v-model="v_pass">
                    </div>
                </div>    
                <div v-if="User.pass != v_pass && User.pass.length >= 8">
                    <h2 style="color: red; font-size: 12px;">Las contraseñas deben ser iguales!!</h2>
                </div>
                  <div v-if="User.pass == v_pass && User.pass.length >= 8">
                    <h2 style="color: green;font-size: 12px;">Contraseñas iguales</h2>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Name"  type="text" class="validate" v-model="User.name">
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="School" type="text" class="validate" v-model="User.school">
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Description" type="text" class="validate" v-model="User.description">
                    </div>
                </div>
                <div class="center">
                    <button class="btn waves-effect waves-light btn blue lighten-1" ><i class="material-icons">people</i></button>
                </div>  
                </form>
            </template>
        </template>



       




      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-red btn red lighten-1">Close</a>
      </div>
    </div>


</template>

<script>
     export default{
        data(){
            return{
              tipo_s: '', //1 --Alumno 2 -- Profesor
              v_pass: '',
              User:{
                  user:'',
                  pass:'',
                  name:'',
                  school: '',
                  description: '',
                  type: ''
              },
              Users:[]
            }
        },
        created(){
          
        },
        methods:{
            get_users(){
                fetch('/user')
                .then(res=>res.json())
                .then(data => {
                    this.Users = data;
                    console.log(this.Users);
                });
            },
           register(){
              this.User.type = this.tipo_s,
                fetch('/user',{
                    method: 'POST',
                    body: JSON.stringify(this.User),
                    headers:{
                        'Accept' : 'application/json',
                        'Content-type' : 'application/json'
                        }
                    }).then(res => res.json())
                    .then(data=>{
                        console.log(data)
                    })
                  

            },
            resetUser(){
                this.User.user = '',
                this.User.pass = '',
                this.User.name = '',
                this.User.school = '',
                this.User.description = '',
                this.User.type = '',
                this.v_pass = ''
            }
        }
    }
</script>
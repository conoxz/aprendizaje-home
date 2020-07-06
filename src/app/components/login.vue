<template>
      <!-- Modal Structure -->
    <div id="demo-modal" class="modal">
      <div class="modal-content">
        <h4 class="header center orange-text">Iniciar Sesión</h4>
        <form class="col s5" @submit.prevent="sendStudent">
          <div class="row">
            <div class="input-field col s12">
              <input placeholder="Name"  type="text" class="validate" v-model="user">
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input placeholder="password" type="password" class="validate" v-model="pass">
            </div>
          </div>
          <div class="center">
            <button class="btn waves-effect waves-light btn blue lighten-1" ><i class="material-icons">people</i></button>
          </div>
          <div>
            <a href="#modal-registrer" class="modal-trigger">¿No tienes cuenta? Registrate!!</a>
          </div>
    
        </form>
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
               user: '',
               pass: ''
            }
        },
        created(){
         
        },
        methods:{
           sendStudent(){
            
            this.reset()
            window.location.href = "ahorcado.html";
           },reset(){
             this.user = '',
             this.pass = ''
           }
        }
    }
</script>
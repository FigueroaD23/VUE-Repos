<template>
  <div class="container mt-5">
    <P>{{this.$store.state.userData}}</P>
    <h3 style="display:inline-block">ToDo con Vue 2 y Vite</h3><img src="./assets/logo.png" alt="Vue-logo" width="50" height="50" class="mb-2">
    <input type="text" autofocus placeholder="Agrega una tarea" class="form-control my-3" v-model="nuevaTarea" @keyup.enter="agregarTarea">
    <button class="btn btn-primary" @click="agregarTarea">Agregar</button>
    <button class="btn btn-warning m-2" @click="limpiarTodo">Limpiar todo</button>
    <div class="alert alert-danger  d-flex justify-content-between align-items-center" role="alert" v-if="alerta">El campo está vacío, agrega texto</div>
    <div class="alert alert-warning d-flex justify-content-between align-items-center" role="alert" v-if="tareas.length<=0">Awb no hay na que hacer</div>      
    <Tarea v-else @editarTarea="editarTarea"  @eliminarTarea="eliminarTarea" :tareas="tareas" syle="color:#e63000"/>
  </div>
</template>

<script>
import Tarea from "./components/Tarea.vue";
export default {
  data(){
    return{
      nuevaTarea:"",
      tareas:[],
      alerta:false
    }
  },
  components:{
    Tarea
  },
  methods:{    
    agregarTarea(){      
      if(this.nuevaTarea.length<=0){this.alerta=true; return}      
      this.tareas.push({nombre:this.nuevaTarea,estado:true})
      console.log(this.tareas)
      this.alerta = false;
      this.nuevaTarea = '';
      localStorage.setItem("datos",JSON.stringify(this.tareas))
    },
    editarTarea(index){
      this.tareas[index].estado = !this.tareas[index].estado;
      localStorage.setItem("datos",JSON.stringify(this.tareas))
    },
    eliminarTarea(i){
      this.tareas.splice(i,1)
      localStorage.setItem("datos",JSON.stringify(this.tareas))
    },
    limpiarTodo(){
      this.tareas=[]
      localStorage.setItem("datos",JSON.stringify(this.tareas))
    }

  },
  created(){
    let datosLS = JSON.parse(localStorage.getItem("datos")) 
    if(datosLS===null) this.tareas = []
    else this.tareas=datosLS  
    console.log("tareas",this.tareas)
    
  }
}
</script>

<style>

</style>
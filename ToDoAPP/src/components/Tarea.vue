<template>
<div>
  <div class="mt-3" v-for="(item,index) of tareas" :key="index">    
      <div  :class="{'alert-secondary': !item.estado,'alert-success':item.estado }" class="alert d-flex justify-content-between align-items-center" role="alert">
       <div class="tituloTarea" :style="!item.estado?'text-decoration: line-through;':''">{{index}}. {{item.nombre}}</div>       
       <div class="contenedor-botones">
        <button class="btn btn-success m-2" @click="editarTarea(index)">OKss</button>
        <button class="btn btn-danger" v-on:click="eliminarTarea(index)">X</button>
       </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        tareas:Array
    //props:['tareas']
    },
    methods: {
        editarTarea(id){
            this.$emit('editarTarea',id)
        },
        eliminarTarea(id){
            this.$emit('eliminarTarea',id)
        }
    }

}
</script>

<style>

</style>
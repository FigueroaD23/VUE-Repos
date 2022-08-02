<template>
  <div id="app">
    <HelloWorld/>
    <img alt="Vue logo" src="./assets/logo.png">    
    <button @click="aumentar">Probar sate</button>
    <h1>Pruebas con Vuex 3</h1>
    <div style="width:90%; border:1px solid lightgray; margin:0 auto;">
      <h5>Getter mapeado: {{getNumeroOperacion}}</h5>
      <h5>State mapeado: {{numero}}</h5>      
      <h5>Numero desde el store normal directo: {{this.$store.state.numero}}</h5>
      <h5>Numero en computed SIN mapeadores: {{nombrePrueba}}</h5>
      <h5>Propiedad computada de un state mapeado: {{prueba}}</h5>      
      <div v-if="pokemones.length>0">
        <ul v-for="pokemon of pokemones" :key="pokemon.name">
          <li>{{pokemon.name}}</li>
        </ul>
        <ul v-for="(tarea, index) of tareas" :key="tarea">
          <li>{{index+contador}} {{tarea}}</li>
        </ul>
      </div>
      
      <div v-else> <h5>CARGANDO POKEMONES.....</h5></div>
    </div>
    
    
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations, mapGetters} from 'vuex'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components:{
    HelloWorld
  },
  created(){
    console.log("desde el created",this.pokemones)
    this.obtenerPokemones()
    this.metododirectoStore()
  },
  computed:{
    //state de forma directa en un computed
    nombrePrueba(){
      return this.$store.state.nombre
    },
    //state en un mapeador
    ...mapState(['numero','pokemones']),
    //mapstate desde un modulo declarado en el mismo store
    ...mapState('tareasModuloStore', ['tareas','contador']),

    //getter directo en un computed
    getNumero(){
      return this.$store.getters.getNumero
    },
    //getter en un mapeador
    ...mapGetters(['getNumeroOperacion','getNombre']),
    //propiedad computada normal
    prueba(){
      return this.pokemones.filter(pokemon=>pokemon.name.length>9)
    }    
  },
  methods:{
    //actions directo en los methods
    metododirectoStore(){
      this.$store.dispatch("pruebaDirecta")
    },
    //actions con mapeador
    ...mapActions(['obtenerPokemones']), 
    //this.$store.commit(['aumentar'])   
    ...mapMutations(['aumentar'])
  }
}
</script>

<style>
body{
  background: #2c3e50;
}
h5,h1,li{
  color:white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

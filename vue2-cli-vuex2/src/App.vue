<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">    
    <h1>Pruebas con Vuex 3</h1>
    <div style="width:90%; border:1px solid lightgray; margin:0 auto;">
      <h5>Numero desde el store normal: {{getNumeroOperacion}}</h5>
      <h5>Numero desde el store normal: {{numero}}</h5>      
      <h5>Numero desde el store normal: {{this.$store.state.numero}}</h5>
      <h5>Numero en computed SIN mapeadores: {{nombrePrueba}}</h5>
      <h5>propiedad computada: {{prueba}}</h5>
      <h5>Nombre: {{getNumero}}</h5>
      <div v-if="pokemones.length>0">
        <ul v-for="pokemon of pokemones" :key="pokemon.name">
          <li>{{pokemon.name}}</li>
        </ul>
      </div>
      <div v-else> <h5>CARGANDO POKEMONES.....</h5></div>
    </div>
    
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations, mapGetters} from 'vuex'
export default {
  name: 'App',
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

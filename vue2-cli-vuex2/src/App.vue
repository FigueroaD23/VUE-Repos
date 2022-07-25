<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">    
    <h1>Pruebas con Vuex 3</h1>
    <div style="width:90%; border:1px solid lightgray; margin:0 auto;">
      <h5>Numero desde el store normal: {{getNumeroOperacion}}</h5>
      <h5>Numero desde el store normal: {{numero}}</h5>
      <h5>Numero desde el store normal: {{prueba}}</h5>
      <h5>Numero desde el store normal: {{this.$store.state.numero}}</h5>
      <h5>Numero desde el store normal: {{this.$store.state.numero}}</h5>
      <h5>Numero desde el store normal: {{this.$store.state.numero}}</h5>
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
  },
  computed:{
    ...mapState(['numero','pokemones']),
    ...mapGetters(['getNumeroOperacion']),
    prueba(){
      return this.numero + 10000
    }    
  },
  methods:{
    ...mapMutations(['aumentar']),
    ...mapActions(['obtenerPokemones'])
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

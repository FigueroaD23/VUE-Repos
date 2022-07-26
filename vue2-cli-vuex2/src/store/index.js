import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numero:0,
    nombre:"prueba nombre desde el store",
    pokemones: []
  },
  //se usan para mutar o modificar el estado y se llama con commit('nombreMutation')
  mutations: {
    //recibe el estado como primer argumento
    aumentar(state){
      state.numero ++
    },
    SetPokemones(state,payload){
      state.pokemones = payload
    }
  },
  //se usan para poner logica, pueden ser asincronas y lo ideal es llamar a las mutaciones desde aquí
  //las actions se llaman con dispatch('nombreAction')
  actions:{
    async obtenerPokemones({commit}){
      try {
        const pokemonesAsync = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')).json()
        console.log(pokemonesAsync)
        commit('SetPokemones',pokemonesAsync.results)

      } catch (error) {
        console.log(error)
      }

    }

  },
  //se usan para llamar una parte del estado, ideales para solo llamar un pedazo de todo el objeto store
  //idealmente se deben llamar en las propiedades computed de los componentes con
  //You can think of them as computed properties for stores.
  //se pueden utilizar helpers para getters con ...mapGetters(['getNumero','getNumeroOperacion'])
  getters:{
    //recibe el estado como primer argumento    
    getNumero( state ){
      return (state.numero * 2) -2
    },
    //como segundo argumento pueden recibir el mismo objeto getters para mandar a llamar algún otro que se necesite
    getNumeroOperacion(state,getters){
      return state.numero + getters.getNumero
    },
    getNombre(state,getters){
      return (state.nombre + '' + getters.getNumero)
    }

  }
  
})

/*
  modules: {
  } */

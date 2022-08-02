import Vue from 'vue'
import Vuex from 'vuex'

import tareasModuloStore from './modulosStore/tareas'

Vue.use(Vuex)
//Vuex 3 para Vue 2
export default new Vuex.Store({

  //STORE INICIAL STATE
  state: {
    numero:0,
    nombre:"prueba nombre desde el store",
    pokemones: []
  },

  //MUTATIONS se usan para mutar o modificar el estado y se llama con commit('nombreMutation')
  mutations: {
    //recibe el estado como primer argumento
    //las mutations siempre reciben solo el state, no reciben el context como en las actions
    aumentar(state){      
      state.numero ++
    },
    SetPokemones(state,payload){
      state.pokemones = payload
    }
  },
  
  //ACTIONS se llaman con dispatch('nombreAction')
  //se usan para poner logica, pueden ser asincronas y lo ideal es llamar a las mutaciones desde aquí
  actions:{
    //en los actions se puede recibir el store, se destructura para el commit y demás (state, getters, dispatch)
    pruebaDirecta(context){console.log("prueba directa del store",context)},
    async obtenerPokemones({commit,dispatch}){
      try {
        const pokemonesAsync = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')).json()
        console.log(pokemonesAsync)
        commit('SetPokemones',pokemonesAsync.results)
        console.log("dispatch prueba desde otro dispatch")
        dispatch("pruebaDirecta")
      } catch (error) {console.log(error)}
    }
  },

  
  //GETTERS se usan para llamar una parte del estado, ideales para solo llamar un pedazo de todo el objeto
  // storeidealmente se deben llamar en las propiedades computed de los componentes
  //You can think of them as computed properties for stores.
  //se pueden utilizar mapeadores para getters con ...mapGetters(['getNumero','getNumeroOperacion'])
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
  },

  modules: {
    tareasModuloStore
    
  }
})


import { createStore } from 'vuex'
import axios from 'axios'
// Create a new store instance.
const store = createStore({
  state () {
    return {
      list_image:[],
      isAuth: false,
      list_food:[]
    }
  },
  mutations: {
    GET_LIST_IMAGE(state,data){
      state.list_image = data
    },
    UPDATE_AUTH(state,auth){
      state.isAuth = auth
    },
    GET_LIST_FOOD(state,data){
      state.list_food = data
    }
  },
  actions: {
    async getListImage({commit}){
     try{
      const response = await axios.get('http://localhost:3000/api/image')
     
      commit('GET_LIST_IMAGE',response.data)
     }catch(error){
      console.log('Loi action getListImage')
     }
    },
    async getListFood({commit}){
      try{
       const response = await axios.get('http://localhost:3000/api/food')
      
       commit('GET_LIST_FOOD',response.data)
      }catch(error){
       console.log('Loi action getListFood')
      }
     }
  }
})


export default store
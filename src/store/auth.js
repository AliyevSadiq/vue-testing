import axios from "axios";
import router from "@/router";
export default {
    state:{
        authenticated:false,
    },
    getters:{
      isAuth(state){
          return state.authenticated
      }
    },
    mutations:{
      setAuth(state,auth){
          return state.authenticated=auth
      },
      clearAuth(state){
          return state.authenticated=false
      }
    },
    actions: {
        async login(ctx, {formData}) {
            await axios.post('http://127.0.0.1:8000/api/auth/login', formData)
                .then(res => {
                   if (res.status===200){
                       localStorage.setItem('authToken',res.data.data.token)
                       ctx.commit("setAuth",true)
                       router.push({name:'home'})
                   }
                })
                .catch(error => ctx.commit("setValidation",error.response.data.message))
        },
        async register(ctx, {formData}) {
            await axios.post('http://127.0.0.1:8000/api/auth/register', formData)
                .then(res => {
                    if (res.status===200){
                        localStorage.setItem('authToken',res.data.data.token)
                        router.push({name:'home'})
                    }
                })
                .catch(error => ctx.commit("setValidation",error.response.data))
        },
        async logout(ctx) {

            await axios.post('http://127.0.0.1:8000/api/auth/logout',{},{
                headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
            })
                .then(res => {
                        localStorage.removeItem('authToken')
                        ctx.commit("clearAuth")
                        router.push({name:'login'})
                })
                .catch(error => ctx.commit("setError",error.response.data))
        }
    }
}
import axios from "axios";
import router from "@/router";
export default {
    actions: {
        async login(ctx, {formData}) {
            await axios.post('http://127.0.0.1:8000/api/auth/login', formData)
                .then(res => {
                   if (res.status===200){
                       localStorage.setItem('authToken',res.data.data.token)
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
        }
    }
}
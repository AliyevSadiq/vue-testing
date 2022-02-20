import router from "../router";

export default {
    state:{
        error:{
            status:"",
            message:""
        }
    },
    mutations:{
        setError(state, error) {
            console.log(error)
            state.error=error
        },
        clearError(state) {
            state.error={
                status:"",
                message:""
            }
        }
    },
    getters:{
        fetchError(state){
            if (state.error.message.length===0){
                router.push({name:"home"})
            }
            return state.error
        }
    }
}
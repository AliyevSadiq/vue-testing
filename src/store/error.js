export default {
    state:{
        error:false
    },
    mutations:{
        setError(state, error) {
            state.error=error
        },
        clearError(state) {
            state.error=false
        }
    },
    getters:{
        isError(state){
            return state.error
        }
    }
}
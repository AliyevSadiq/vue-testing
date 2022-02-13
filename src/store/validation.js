export default {
    state:{
        validations:[]
    },
    mutations:{
        setValidation(state,validations){
            state.validations=validations
        },
        clearValidation(state){
            state.validations=[]
        }
    },
    getters:{
        getValidationError(state){
            return state.validations
        }
    }
}
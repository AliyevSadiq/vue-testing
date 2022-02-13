export default {
    state: {
        success: false,
    },
    mutations: {
        setSuccess(state, success = false) {
            state.success = success
        },
        clearSuccess(state) {
            state.success = false
        }
    },
    getters: {
        isSuccess(state) {
            return state.success
        }
    }
}
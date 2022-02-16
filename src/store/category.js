import {privateInstance} from "@/config/axios";

export default {
    state: {
        categories: [],
        form:{
            title:"",
            body:""
        }
    },
    mutations: {
        setCategoryList(state, categories) {
            state.categories = categories
        },
        setForm(state,form){
            state.form=form
        },
        clearForm(state){
            state.form={
                    title:"",
                    body:"",
            }
        }
    },
    getters: {
        getCategoryList(state) {
            return state.categories
        },
        getForm(state) {
            return state.form
        }
    },
    actions: {
        async fetchCategories(ctx) {
            await privateInstance.get("/category")
                .then(res => res.data)
                .then(res => {
                    ctx.commit("clearValidation")
                    ctx.commit("clearSuccess")
                    ctx.commit("clearError")
                    ctx.commit("clearForm")
                    ctx.commit("setCategoryList", res.data)
                }).catch(error => {
                    ctx.commit("setError", true)
                })
        },
        async fetchCategory(ctx,id) {
            await privateInstance.get(`/category/${id}`)
                .then(res => res.data)
                .then(res => {
                    ctx.commit("setForm",{
                        title:res.data.title,
                        body:res.data.body,
                    })
                }).catch(error => {
                    ctx.commit("setError", true)
                })
        },
       async createCategory(ctx, {formData}) {
            await privateInstance.post("/category", formData)
                .then(function (response) {
                    ctx.commit("clearValidation")
                    ctx.commit("setSuccess",true)
                    ctx.commit("clearForm")
                })
                .catch(function (error) {
                    ctx.commit("clearSuccess")
                    ctx.commit("setValidation",error.response.data.errors);
                })
        },
        async updateCategory(ctx, {formData,id}) {
            await privateInstance.put(`/category/${id}`, formData)
                .then(function (response) {
                    ctx.commit("clearValidation")
                    ctx.commit("setSuccess",true)
                })
                .catch(function (error) {
                    ctx.commit("clearSuccess")
                    ctx.commit("setValidation",error.response.data.errors);
                })
        },
        async deleteCategory(ctx,id){
            await privateInstance.delete(`/category/${id}`,)
                .then(res=>{
                    const elementIndex=this.state.category.categories.map(data=>data.id).indexOf(id)
                    this.state.category.categories.splice(elementIndex,1)
                    ctx.commit("setCategoryList",this.state.category.categories);
                }).catch(error=>{
                    ctx.commit("setError",true)
                })

        }
    }
}
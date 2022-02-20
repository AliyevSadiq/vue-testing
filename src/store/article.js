import {privateInstance} from "@/config/axios";

export default {
    state:{
        articles:[],
        form:{
            title:'',
            description:'',
            category_id:'',
            image:''
        }
    },
    getters:{
        getArticleList(state){
            return state.articles
        },
        getForm(state) {
            return state.form;
        }
    },
    mutations:{
        setArticleList(state,articles){
            state.articles=articles
        },
        setForm(state, form) {
          state.form=form
        },
        clearForm(state){
            state.form={
                title:"",
                category_id:"",
                image:"",
                description:"",
            }
        }

    },
    actions:{
        async fetchArticleList(ctx){
            await privateInstance.get('/article')
                .then(res => res.data)
                .then(res => {
                    ctx.commit("clearForm")
                    ctx.commit("setArticleList", res.data)
                })
        },
        async fetchArticle(ctx,id) {
            await privateInstance.get(`/article/${id}`)
                .then(res => res.data)
                .then(res => {
                    ctx.commit("setForm",{
                        title:res.data.title,
                        category_id:res.data.category_id,
                        description:res.data.description,
                    })
                })
        },
        async createArticle(ctx,{formData}){
            await privateInstance.post('/article',formData)
                .then(function (response) {
                ctx.commit("setSuccess",true)
                ctx.commit("clearForm")
            })
        },
        async updateArticle(ctx, {formData,id}) {
            await privateInstance.post(`/article/${id}`, formData)
                .then(function (response) {
                    ctx.commit("setSuccess",true)
                })
        },
        async deleteArticle(ctx,id){
            await privateInstance.delete(`/article/${id}`,)
                .then(res=>{
                    const elementIndex=this.state.article.articles.map(data=>data.id).indexOf(id)
                    this.state.article.articles.splice(elementIndex,1)
                    ctx.commit("setArticleList",this.state.article.articles);
                })

        }
    }
}
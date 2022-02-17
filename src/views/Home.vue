<template>
  <div class="row">
    <div class="d-flex justify-content-end mb-2 mt-2">
      <router-link class="btn btn-primary" :to="{name:'article.create'}">CREATE ARTICLE</router-link>
    </div>
    <h1>Article list</h1>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Category</th>
        <th scope="col">User</th>
        <th scope="col">Image</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="article in articles" :key="article.id">
        <th scope="row">{{article.id}}</th>
        <td>{{article.title}}</td>
        <td>{{article.category}}</td>
        <td>{{article.user}}</td>
        <td>
          <img :src="article.image" style="max-height: 150px; max-width: 150px;" :alt="article.title">
        </td>
        <td>
          <router-link class="btn btn-small btn-info" :to="{name:'article.edit',params:{id:article.id}}">EDIT</router-link>
          <button class="btn btn-small btn-danger" @click="removeElement(article.id)">DELETE</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  name: "Home",
  methods:{
    ...mapActions(["fetchArticleList","deleteArticle"]),
    async removeElement(id){
      await this.deleteArticle(id)
    }
  },
  async mounted() {
    await this.fetchArticleList()
  },
  computed:{
    ...mapGetters({
      articles:"getArticleList"
    })
  }
}
</script>

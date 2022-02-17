<template>
  <div class="row">
    <div class="d-flex justify-content-end mb-2 mt-2">
      <router-link class="btn btn-primary" to="/category/create">CREATE CATEGORY</router-link>
    </div>
    <h1>Category list</h1>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="category in categories" :key="category.id">
        <th scope="row">{{category.id}}</th>
        <td>{{category.title}}</td>
        <td>
          <router-link class="btn btn-small btn-info" :to="{name:'category.edit',params:{id:category.id}}">EDIT</router-link>
          <button class="btn btn-small btn-danger" @click="removeElement(category.id)">DELETE</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  name: "Categories",
  methods:{
    ...mapActions(["fetchCategories","deleteCategory"]),
    async removeElement(id){
      await this.deleteCategory(id)
    }
  },
  async mounted() {
    await this.fetchCategories()
  },
  computed:{
    ...mapGetters({
      categories:"getCategoryList"
    })
  }
}
</script>

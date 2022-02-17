<template>
  <h1>Create article</h1>
  <div class="row">
    <ArticleForm  :successMessage="message" :actionName="actionName" :form="getForm"/>
  </div>
</template>

<script>
import ArticleForm from "@/components/ArticleForm";
import {mapGetters,mapMutations} from 'vuex';
export default {
  name: "ArticleCreate",
  data:()=>({
    message:"Article created",
    actionName:"createArticle"
  }),
  components: {ArticleForm},
  computed:mapGetters(["getForm"])
}
</script>

<style scoped>

</style>
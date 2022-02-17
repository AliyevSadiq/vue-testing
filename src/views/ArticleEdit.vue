<template>
  <h1>Edit article</h1>
   <div class="row">
     <ArticleForm :form="getForm" :successMessage="message" :actionName="actionName"/>
   </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import ArticleForm from "@/components/ArticleForm";
export default {
  name: "ArticleEdit",
  data:()=>({
    message:"Article updated",
    actionName:"updateArticle"
  }),
  components: {ArticleForm},
  methods:mapActions(["fetchArticle"]),
  async mounted() {
    await this.fetchArticle(this.$route.params.id)
  },
  computed:mapGetters(["getForm"])
}
</script>

<style scoped>

</style>
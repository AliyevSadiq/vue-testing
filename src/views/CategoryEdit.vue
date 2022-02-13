<template>
  <h1>Edit category</h1>
   <div class="row">
     <CategoryForm :form="getForm" :successMessage="message" :actionName="actionName"/>
   </div>
</template>

<script>
import CategoryForm from "@/components/CategoryForm";
import {mapActions,mapGetters} from 'vuex';
export default {
  name: "CategoryEdit",
  data:()=>({
    message:"Category updated",
    actionName:"updateCategory"
  }),
  components: {CategoryForm},
  methods:mapActions(["fetchCategory"]),
  async mounted() {
    await this.fetchCategory(this.$route.params.id)
  },
  computed:mapGetters(["getForm"])
}
</script>

<style scoped>

</style>
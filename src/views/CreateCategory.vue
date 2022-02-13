<template>
  <h1>Create category</h1>
  <div class="row">
   <CategoryForm  :successMessage="message" :actionName="actionName" :form="getForm"/>
  </div>

</template>

<script>
import CategoryForm from "@/components/CategoryForm";
import {mapGetters,mapMutations} from 'vuex';
export default {
  name: "CreateCategory",
  data:()=>({
    message:"Category created",
    actionName:"createCategory"
  }),
  components: {CategoryForm},
  computed:mapGetters(["getForm"])
}
</script>

<style scoped>

</style>
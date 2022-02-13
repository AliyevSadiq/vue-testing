<template>
  <SuccessAlert v-if="isSuccess===true" :message="successMessage"/>
  <form @submit.prevent="submitHandler">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" :class="{'is-invalid':getValidationError.title}"
             class="form-control"
             v-model="form.title" id="title" placeholder="Enter title">
      <div class="invalid-feedback" v-if="getValidationError.title">{{getValidationError.title[0]}}</div>
    </div>
    <div class="form-group">
      <label for="body">Description</label>
      <textarea class="form-control" id="body" v-model="form.body" rows="3"></textarea>
    </div>
    <div class="form-group">
      <button class="btn btn-success">SUBMIT</button>
    </div>
  </form>

</template>

<script>
import {mapGetters,mapMutations} from "vuex";
import SuccessAlert from "./SuccessAlert";

export default {
  name: "CategoryForm",
  components: {SuccessAlert},
  props: ["actionName","successMessage","form"],
  methods: {
    async submitHandler() {
      await this.$store.dispatch(this.actionName,{
        formData:this.form,
        id:this.$route.params.id
      })
    },
  },
  computed:mapGetters(["getValidationError","isSuccess"])
}
</script>

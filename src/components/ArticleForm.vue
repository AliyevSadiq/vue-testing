<template>
  <SuccessAlert v-if="isSuccess===true" :message="successMessage"/>
  <form @submit.prevent="submitHandler" enctype="multipart/form-data">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" :class="{'is-invalid':validation.title}"
             class="form-control"
             v-model="form.title" id="title" placeholder="Enter title">
      <div class="invalid-feedback" v-if="validation.title">{{validation.title[0]}}</div>
    </div>
    <div class="form-group">
      <label>Image</label>
      <input type="file" :class="{'is-invalid':validation.image}"
             class="form-control"
             v-model="form.image" id="image"
             @change="onFileChange"
      />
      <div class="invalid-feedback" v-if="validation.image">{{validation.image[0]}}</div>
    </div>
    <div class="form-group">
      <label>Category</label>
      <select class="form-select"
              v-model="form.category_id"
              :class="{'is-invalid':validation.category_id}"
              aria-label="Default select example">
        <option
            v-for="cat in categories"
            v-bind:value="cat.id">
          {{ cat.title }}
        </option>
      </select>
        <div class="invalid-feedback" v-if="validation.category_id">{{validation.category_id[0]}}</div>
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" :class="{'is-invalid':validation.description}" id="description" v-model="form.description" rows="3"></textarea>
      <div class="invalid-feedback" v-if="validation.description">{{validation.description[0]}}</div>
    </div>
    <div class="form-group">
      <button class="btn btn-success">SUBMIT</button>
    </div>
  </form>

</template>

<script>
import {mapGetters,mapActions} from "vuex";
import SuccessAlert from "./SuccessAlert";

export default {
  name: "ArticleForm",
  components: {SuccessAlert},
  props: ["actionName","successMessage","form"],
  methods: {
    ...mapActions(["fetchCategories"]),
    onFileChange(e){
      this.form.image = e.target.files[0];
    },
    async submitHandler() {
      let formData = new FormData();
      formData.append('title', this.form.title);
      formData.append('image', this.form.image);
      formData.append('category_id', this.form.category_id);
      formData.append('description', this.form.description);

      await this.$store.dispatch(this.actionName,{
        formData,
        id:this.$route.params.id
      })
    },
  },
 async mounted() {
    await this.fetchCategories()
 },
  computed:{
    ...mapGetters({
      validation:"getValidationError",
      categories:"getCategoryList",
      isSuccess:"isSuccess"
    })
  }
}
</script>

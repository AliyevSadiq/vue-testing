<template>
  <form @submit.prevent="submitHandler">
    <h3 class="text-center text-info">Register</h3>
    <div class="form-group">
      <label for="name"  class="text-info">Name:</label><br>
      <input type="text" :class="{'is-invalid':validation.name}" v-model="form.name"  id="name" class="form-control">
      <div class="invalid-feedback" v-if="validation.name">{{validation.name[0]}}</div>
    </div>
    <div class="form-group">
      <label for="email"  class="text-info">Email:</label><br>
      <input type="email" :class="{'is-invalid':validation.email}" v-model="form.email"  id="email" class="form-control">
      <div class="invalid-feedback" v-if="validation.email">{{validation.email[0]}}</div>
    </div>
    <div class="form-group">
      <label for="password" class="text-info">Password:</label><br>
      <input type="password" v-model="form.password" :class="{'is-invalid':validation.password}" id="password" class="form-control">
      <div class="invalid-feedback" v-if="validation.password">{{validation.password[0]}}</div>
    </div>
    <div class="form-group mt-3">
      <button class="btn btn-info btn-md">Registration</button>
    </div>
  </form>

</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "Register",
  data:()=>({
    form:{
      email:"",
      name:"",
      password:""
    }
  }),
  methods:{
    async submitHandler(){
      await this.$store.dispatch('register',{
        formData:this.form
      })
    }
  },
  computed:{
    ...mapGetters({
      validation:"getValidationError"
    })
  }
}
</script>
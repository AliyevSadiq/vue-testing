<template>
  <form @submit.prevent="submitHandler">
    <h3 class="text-center text-info">Login</h3>
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
    <div class="form-group">
      <button class="btn btn-info btn-md">Login</button>
    </div>
    <div id="register-link" class="text-right">
      <router-link :to="{name:'register'}" class="text-info">Register here</router-link>
    </div>
  </form>

</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "Login",
  data:()=>({
    form:{
      email:"",
      password:"",
    }
  }),
  methods:{
    async submitHandler(){
      await this.$store.dispatch('login',{
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

<style scoped>

</style>
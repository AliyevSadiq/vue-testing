<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" exact to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/categories">Categories</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a  class="nav-link" @click.prevent="logoutHandler">Logout</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: "Navbar",
  methods: {
    ...mapActions(["logout"]),
    logoutHandler(){
      this.logout()
    }
  },
  computed:mapGetters(["isAuth"])
}
</script>

<style scoped>

</style>
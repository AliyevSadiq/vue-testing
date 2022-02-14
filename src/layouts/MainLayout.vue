<template>
    <div class="container">
      <Navbar/>
      <router-view/>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "main-layout",
  components: {Navbar}
}
</script>

<style scoped>

</style>
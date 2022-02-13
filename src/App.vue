<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>



<script>
import MainLayout from "@/layouts/MainLayout.vue"
export default {
  computed:{
    layout(){
      return (this.$route.meta.layout || 'empty')+'-layout'
    }
  },
  components:{
    MainLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
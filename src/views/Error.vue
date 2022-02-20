<template>
   <div>
     <h1>{{error.status}}</h1>
     <p class="text-danger">{{error.message}}</p>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Error",
  computed:{
    ...mapGetters({
      error:"fetchError"
    })
  }
}
</script>

<style scoped>

</style>
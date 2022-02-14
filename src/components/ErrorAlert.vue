<template>
  <div class="alert alert-danger alert-dismissible fade show">
    <strong>Error!</strong> {{message}}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>
</template>

<script>
export default {
  name: "ErrorAlert",
  props:["message"]
}
</script>

<style scoped>

</style>
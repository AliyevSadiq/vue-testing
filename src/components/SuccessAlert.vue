<template>
  <div class="alert alert-success alert-dismissible fade show">
    <strong>Success!</strong> {{message}}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>
</template>

<script>
export default {
  name: "SuccessAlert",
  props:["message"]
}
</script>

<style scoped>

</style>
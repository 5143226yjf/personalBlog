<template>
  <div class="journal">
    <div class="journal-header">
      <h2>My journal</h2>
      <div class="journal-header-line"></div>
     </div>
  </div>
</template>
<script>
    export default {
      props: []
    }
</script>
<style scoped>
  .journal{
    width: 100%;
  }
  .journal-header{
    width: 200px;
    text-align: center;
    height:40px;
    margin: 50px auto;
  }
  .journal-header-line{
    width: 80px;
    height: 5px;
    background: #efc14e;
    margin: 15px auto;
  }
</style>

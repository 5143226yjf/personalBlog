<template>
    <div class="add-journal">
      <div class="container-nav">
        <Nav></Nav>
      </div>
    </div>
</template>
<script>
    import Nav from '~components/nav'
    export default {
      components: {
        Nav
      }
    }
</script>
<style scoped>
  .add-journal{
    background-color: rgb(191,234,215);
    width: 100%;
    height: 810px;
    background-image:url(./imgs/journal-pic.png);
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
  }
  .container-nav{
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgb(131,186,183);
    filter:alpha(opacity=50);
    background:rgba(131,186,183,0.5) none repeat scroll 0 0 !important;
  }

</style>

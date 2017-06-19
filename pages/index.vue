<template>
  <div class="container">
    <div class="first-page">
      <div class="container-nav">
        <Nav></Nav>
      </div>
      <img src="~static/background.jpg" class="first-page-pic"/>
      <div class="content">
        <h1>welcome to my blog!</h1>
      </div>
    </div>
    <Mood></Mood>
    <Journal></Journal>
    <Footer></Footer>
  </div>
</template>

<script>
  import Nav from '~components/nav/index.vue'
  import Mood from '~components/mood/index.vue'
  import Journal from '~components/journal/index.vue'
  import Footer from '~components/footer/index.vue'
  export default {
    components: {
      Nav,
      Mood,
      Journal,
      Footer
    }
  }
</script>

<style>
.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container-nav{
  position: absolute;
  top: 0;
  width: 100%;
}
.first-page{
  position: relative;
}
.first-page-pic{
  top: 0;
  width: 100%;
  height: 810px;
  z-index: -1;
}
  .content{
    width: 500px;
    font-size: 40px;
    height: 150px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: #ffffff;
  }
</style>

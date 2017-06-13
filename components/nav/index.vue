<template>
    <div class="nav">
      <div class="nav-left">
        <nuxt-link to="/">主页</nuxt-link>
      </div>
      <div class="nav-right">
        <ul>
          <li><a href="javascript:">日志</a></li>
          <li><a href="javascript:">心情</a></li>
          <li><a href="javascript:">发表日志</a></li>
          <li><nuxt-link to="/addMood">发表心情</nuxt-link></li>
        </ul>
      </div>
      <div class="nav-line"></div>
    </div>
</template>
<script>
  export default {
    props: []
  }
</script>
<style scoped>
  .nav{
    width: 100%;
    height: 51px;
    position: relative;
    color: #fff;
  }
  .nav-left{
    float: left;
    width: 25%;
    text-align: center;
    line-height: 50px;
  }
  .nav-right{
    float: left;
    text-align: center;
  }
  .nav-right ul{
    position: absolute;
    right: 10%;
    height: 50px;
    line-height: 50px;
  }
  .nav-right ul li{
    float: left;
    margin-left: 40px;
    list-style-type: none;
  }
  a{
    color: #ffffff;
    text-decoration: none;
  }
  .nav-line{
    background: #fff;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50px;
    opacity: 0.4;
  }
</style>

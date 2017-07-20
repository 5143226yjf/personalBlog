<template>
    <div class="nav">
      <div class="nav-left">
        <img :src="imgSrc" @click="show = !show"/>
        <nuxt-link to="/">主页</nuxt-link>
      </div>
      <div class="nav-right">
        <ul>
          <li><a href="/#journal">日志</a></li>
          <li><a href="/#mood">心情</a></li>
          <li><nuxt-link to="/addJournal">发表日志</nuxt-link></li>
          <li><nuxt-link to="/addMood">发表心情</nuxt-link></li>
        </ul>
      </div>
      <div class="nav-line"></div>
      <transition name="slide">
        <div class="personal-info" v-if="show">
          <PersonalInfo></PersonalInfo>
        </div>
      </transition>
    </div>
</template>
<script>
  import PersonalInfo from '~components/personalInfo'
  export default {
    components: {
      PersonalInfo
    },
    data () {
      return {
        show: false,
        imgSrc: this.$store.state.info.img
      }
    },
    methods: {
     /* backToMood () {
        console.log('hahha', this.$router.path)
        if (this.$router.path === '/') {
          console.log(this.$router.path)
          window.scrollBy(0, 860)
        } else {
          window.location.href = '/'
          window.scrollBy(0, 860)
        }
      },
      backToJournal () {
        if (this.$router.path === '/') {
          console.log(this.$router.path)
          window.scrollBy(0, 860)
        } else {
          window.location.href = '/'
          // window.scrollBy(0, 860)
          window.body.scrollTop = 810
        }
      }  */
    }
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
    line-height: 50px;
  }
  .nav-left img{
    width: 40px;
    height: 40px;
    float: left;
    margin: 5px 20px;
  }
  .nav-right{
    float: left;
    text-align: center;
  }
  .nav-right ul{
    position: absolute;
    right: 5%;
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
  a:hover{
    color: #efc14e;
  }
  .nav-line{
    background: #fff;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50px;
    opacity: 0.4;
  }
  .personal-info{
    position: absolute;
    top: 51px;
    left: 0;
  }
  .slide-enter-active {
    transition: all .3s ease;
  }
  .slide-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-enter, .slide-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

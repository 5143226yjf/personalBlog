<template>
    <div class="info">
      <ul>
        <li class="info-list">姓名: {{ info.name }}</li>
        <li class="info-list">生日: {{ info.birthday }}</li>
        <li class="info-list">电话: {{ info.tel }}</li>
        <li class="info-list">邮箱: {{ info.email }}</li>
        <li class="info-btn"><nuxt-link to="/reviseInfo">修改信息</nuxt-link></li>
      </ul>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          info: this.$store.state.info
        }
      }
    }
</script>
<style scoped>
  .info{
    width: 240px;
    background: #fff;
    color: #aaa;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
  }
  .info ul{
    padding:20px 0;
    width: 200px;
    margin: 0 auto;
  }
  .info-list{
    list-style-type: none;
    width: 200px;
    height: 40px;
    padding-left: 10px;
  }
  .info-btn{
    width: 180px;
    height: 40px;
    list-style-type: none;
    background: #41B883;
    text-align: center;
    border-radius: 20px;
    line-height: 40px;
    margin: 15px 0;
  }
  .info-btn a{
    color: #fff;
    text-decoration: none;
  }
</style>

<template>
    <div class="info">
      <ul>
        <li class="info-list">姓名: lethe</li>
        <li class="info-list">生日: 1995-08-16</li>
        <li class="info-list">电话: 18716037958</li>
        <li class="info-list">邮箱: 1443646652@qq.com</li>
        <li class="info-btn"><nuxt-link to="/reviseInfo">修改信息</nuxt-link></li>
      </ul>
    </div>
</template>
<script>
    export default {
      props: []
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

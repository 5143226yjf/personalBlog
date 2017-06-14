<template>
    <div class="revise-info">
      <div class="container-nav">
        <Nav></Nav>
      </div>
      <div class="revise-info-content">
        <div class="head-pic">
          <img :src="imgURL"/>
          <label>选择图片上传<input type="file" class="img-upload"></label>
        </div>
        <div class="container">
          <div class="container-list" v-for="data in reviseList">
            <label>{{ data }}:</label>
            <input type="text"/>
          </div>
          <div class="container-list">
            <label>生日:</label>
            <input type="date"/>
          </div>
          <div class="container-list">
            <button>确认修改</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import img from './head-pic.jpeg'
  import Nav from '~components/nav'
  export default {
    components: {
      Nav
    },
    data () {
      return {
        imgURL: img,
        reviseList: ['姓名', '电话', '邮箱']
      }
    }
  }
</script>
<style scoped>
  .revise-info{
    width: 100%;
    position: relative;
  }
  .container-nav{
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgb(131,186,183);
    filter:alpha(opacity=90);
    background:rgba(131,186,183,0.9) none repeat scroll 0 0 !important;
  }
  .revise-info-content{
    width: 80%;
    margin: 0 auto;
    padding-top: 100px;
  }
  .head-pic{
    float: left;
  }
  .head-pic label{
    height: 30px;
    line-height: 30px;
    background: #41B883;
    position: relative;
    display: inherit;
    text-align: center;
    color: #fff;
    margin-top: 20px;
    border-radius: 10px;
    cursor: pointer;
  }
  .head-pic input[type="file"]{
    font-size: 0;
    position: absolute;
    overflow: hidden;
    right: 0;
    top: 0;
    opacity: 0;
  }
  .container{
    float: right;
    width: 800px;
    margin: 20px auto;
  }
  .container-list{
    height: 80px;
  }
  .container-list label{
    margin-right: 20px;
  }
  .container-list input{
    width: 400px;
    height: 40px;
    padding-left: 10px;
  }
  .container button{
    background: #41B883;
    color: #fff;
    width: 180px;
    height: 40px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    outline:none;
    cursor: pointer;
  }
</style>

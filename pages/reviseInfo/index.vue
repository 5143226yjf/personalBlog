<template>
    <div class="revise-info">
      <div class="container-nav">
        <Nav></Nav>
      </div>
      <div class="revise-info-content">
        <div class="head-pic">
          <img :src="imgUrl"/>
          <label>选择图片上传
            <picture-input
              ref="pictureInput"
              @change="onChange"
              width="200"
              height="200"
              accept="image/jpeg,image/png"
              size="10"
              buttonClass="btn">
            </picture-input>
            <!--<input type="file" class="img-upload" ref="img" @changle="handleFileChange">-->
          </label>
        </div>
        <div class="container">
          <div class="container-list">
            <label>姓名:</label>
            <input type="text" :value="info.name" ref="username"/>
          </div>
          <div class="container-list">
            <label>电话:</label>
            <input type="text" :value="info.tel" ref="tel"/>
          </div>
          <div class="container-list">
            <label>邮箱:</label>
            <input type="text" :value="info.email" ref="email"/>
          </div>
          <div class="container-list">
            <label>生日:</label>
            <input type="date" :value="info.birthday" ref="birthday"/>
          </div>
          <div class="container-list">
            <button @click="revise">确认修改</button>
          </div>
          <div class="show-msg">
            <Message :tip="tip" :isMsg="isMsg"></Message>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
  import Nav from '~components/nav'
  import PictureInput from 'vue-picture-input'
  import Message from '~components/showMsg'

  export default {
    components: {
      Nav,
      PictureInput,
      Message
    },
    data () {
      return {
        imgUrl: this.$store.state.info.img,
        info: this.$store.state.info,
        file: []
      }
    },
    methods: {
      /*  imgPreview (file) {
        let self = this

        if (!file || !window.FileReader) return

        if (/^image/.test(file.type)) {
          var reader = new FileReader()
          reader.readAsDataURL(file)

          reader.onloadend = function () {
            self.imgUrl = this.result
            console.log(this.result)
          }
        }
      },
      handleFileChange (e) {
        if (typeof e.target === 'undefined') this.file = e[0]
        else this.file = e.target.files[0]
        this.imgPreview(this.file)
      },  */
      onChange () {
        console.log('New picture selected!')
        if (this.$refs.pictureInput.image) {
          console.log(this.$refs.pictureInput.image)
          this.imgUrl = this.$refs.pictureInput.image
        } else {
          console.log('FileReader API not supported: use the <form>, Luke!')
        }
      },
      revise (e) {
        e.preventDefault()
        let img = this.$refs.pictureInput.image
        let name = this.$refs.username.value
        let tel = this.$refs.tel.value
        let email = this.$refs.email.value
        let birthday = this.$refs.birthday.value

        let personInfo = {
          img: img,
          name: name,
          tel: tel,
          email: email,
          birthday: birthday
        }
        console.log(img)
        this.$store.state.info = personInfo
        this.tip = '修改信息成功'
        this.isMsg = true
        setTimeout(() => { this.isMsg = false }, 1500)
        console.log(this.$store.state.info)
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
  .head-pic img{
    width: 200px;
    height: 200px;
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
  .picture-input{
    opacity: 0;
  }
  .show-msg{
    position: absolute;
    top: 200px;
    right: 0;
    width: auto;
    height: 0;
  }
</style>

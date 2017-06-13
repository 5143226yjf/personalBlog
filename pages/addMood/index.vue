<template>
    <div class="add-mood">
      <div class="container-nav">
        <Nav></Nav>
      </div>
      <div class="add-mood-lists">
        <div class="add-mood-img">
          <imgInputer v-model="file" accept="image/*" @onChange="fileChange"></imgInputer>
        </div>
        <div class="add-mood-title">
          <input type="text" placeholder="mood标题" v-model="moodTitle"/>
        </div>
        <div class="add-mood-content">
          <textarea rows="3" cols="20" v-model="moodContent" placeholder="mood内容"></textarea>
        </div>
        <div class="add-mood-btn">
          <button @click="addMood" class="add-mood-btn-left">添加心情</button>
        </div>
      </div>
      <div class="show-msg">
        <Message :tip="tip" :isMsg="isMsg"></Message>
      </div>
    </div>
</template>
<script>
    import img from './imgs/s3.jpg'
    import Nav from '~components/nav'
    import imgInputer from '~components/imgInput'
    import Message from '~components/showMsg'
    export default {
      data () {
        return {
          show: true,
          file: null,
          moodTitle: '',
          moodContent: '',
          isMsg: false,
          tip: ''
        }
      },
      components: {
        imgInputer,
        Nav,
        Message
      },
      methods: {
        addMood () {
          let imgUrl
          if (localStorage.getItem('imgUrl') === '') {
            imgUrl = img
          } else if (this.moodTitle === '') {
            this.tip = '标题不能为空'
            this.isMsg = true
            setTimeout(() => { this.isMsg = false }, 1500)
          } else if (this.moodContent === '') {
            this.tip = '内容不能为空'
            this.isMsg = true
            setTimeout(() => { this.isMsg = false }, 1500)
          } else {
            imgUrl = localStorage.getItem('imgUrl')
            let mood = {
              img: imgUrl,
              title: this.moodTitle,
              content: this.moodContent
            }
            console.log(this.moodImg)
            this.$store.commit('addMood', mood)
            this.tip = '添加心情成功！'
            this.isMsg = true
            setTimeout(() => { this.isMsg = false }, 1500)
          }
        },
        fileChange (file, name) {
          console.log('File:', file)
          console.log('FileName:', name)
        }
      }
    }
</script>
<style scoped>
  .add-mood{
    width: 100%;
    height: 810px;
    background-image:url(./imgs/background.jpg);
    position: relative;
  }
  .container-nav{
    position: absolute;
    top: 0;
    width: 100%;
  }
  .add-mood-lists{
    width: 700px;
    margin: 0 auto;
    padding: 50px 0;
  }
  .add-mood-img{
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .add-mood-title{
    width: 700px;
    height: 50px;
    margin: 50px auto;
  }
  .add-mood-title input{
    width: 700px;
    height: 50px;
    border: 1px solid #eee;
    padding-left: 20px;
  }
  .add-mood-content{
    width: 700px;
    height: 200px;
    margin: 0 auto;
  }
  .add-mood-content textarea{
    width: 700px;
    height: 200px;
    border: 1px solid #eee;
    padding: 10px 0 0 20px;
  }
  .add-mood-btn{
    width: 200px;
    margin: 50px auto;
  }
  .add-mood-btn button{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    margin: 0 auto;
    background: #00BCD4;
    color: #fff;
    border: none;
    outline: none;
  }
  .show-msg{
    position:absolute;
    top: 200px;
    left: 0;
    width: auto;
    height: 0;
  }
</style>

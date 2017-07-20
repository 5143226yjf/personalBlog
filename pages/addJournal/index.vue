<template>
    <div class="add-journal">
      <div class="container-nav">
        <Nav></Nav>
      </div>
      <div class="add-journal-container">
        <div class="container-title">
          <span>日志标题：</span><input type="text" ref="title"/><br>
        </div>
        <div class="container-content">
          <span>日志内容：</span><textarea rows="3" cols="20" ref="content"></textarea>
        </div>
        <div class="add-journal-btn">
          <button @click="addJournal" class="left-btn">提交</button>
          <button class="right-btn" @click="clear">取消</button>
        </div>
      </div>
      <div class="show-msg">
        <Message :tip="tip" :isMsg="isMsg"></Message>
      </div>
    </div>
</template>
<script>
    import Nav from '~components/nav'
    import Message from '~components/showMsg'

    export default {
      data () {
        return {
          isMsg: false,
          tip: ''
        }
      },
      components: {
        Nav,
        Message
      },
      methods: {
        addJournal () {
          let time = this.getDateT()
          let data = {
            title: this.$refs.title.value,
            time: time,
            content: this.$refs.content.value
          }
          this.$store.commit('addJournal', data)
          this.tip = '添加日志成功！'
          this.isMsg = true
          setTimeout(() => { this.isMsg = false }, 1500)
        },
        clear () {
          this.$refs.title.value = ''
          this.$refs.content.value = ''
        },
        getDateT () {
          let date = new Date()
          let seperator1 = '-'
          let seperator2 = ':'
          let month = date.getMonth() + 1
          let strDate = date.getDate()
          if (month >= 1 && month <= 9) {
            month = '0' + month
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate
          }
          let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
          return currentdate
        }
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
  .add-journal-container{
    width: 80%;
    margin:0 auto;
    padding: 100px 0;
  }
  .container-title{
    width: 1200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 0 auto;
  }
  .container-title input{
    width: 1000px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 12px;
    padding-left: 10px;
    background-color: #fff;
  }
  .container-content{
    width: 1200px;
    height: 400px;
    text-align: center;
    margin: 20px auto;
  }
  .container-content textarea{
    width: 1000px;
    height: 400px;
    border-radius: 12px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #fff;

  }
  .container-content span{
    height: 300px;
    vertical-align: top;
  }
  .add-journal-btn{
    width: 1000px;
    margin-left: 140px;
    height: 50px;
  }
  .add-journal-btn button{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    margin: 0 auto;
    background: #00BCD4;
    color: #fff;
    border: none;
    outline: none;
    font-size: 24px;
  }
  .left-btn{
    float: left;
  }
  .right-btn{
    margin-left: 200px;
    float: right;
  }
  .show-msg{
    position: absolute;
    top: 200px;
    left: 0;
    width: auto;
    height: 0;
  }

</style>

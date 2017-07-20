<template>
  <div class="journal" id="journal">
    <div class="journal-header">
      <h2>My journal</h2>
      <div class="journal-header-line"></div>
    </div>
    <div class="journal-container">
      <ul>
        <li v-for="data in journal" class="journal-list">
          <div class="list-left">
            <div class="list-left-radius"></div>
            <div class="list-left-line"></div>
          </div>
          <div class="list-right">
            <h3> {{ data.title }}</h3>
            <span><img src="./imgs/time.png"/>{{ data.time}}</span>
            <p>{{ data.content.substring(0,300) }}...</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          journal: this.$store.state.journal
        }
      }
    }
</script>
<style scoped>
  .journal{
    width: 100%;
  }
  .journal-header{
    width: 200px;
    text-align: center;
    height:40px;
    margin: 50px auto;
  }
  .journal-header-line{
    width: 80px;
    height: 5px;
    background: #efc14e;
    margin: 15px auto;
  }
  .journal-container ul{
    width: 90%;
    margin: 0 auto;
    clear: both;
    padding-left: 0;
  }
  .journal-list{
    height: 200px;
    list-style-type: none;
    background: #ffffff;
    margin: 5px auto;
  }
  .list-left{
    float: left;
    width: 5%;
  }
  .list-left-radius{
    width: 20px;
    height: 20px;
    background: pink;
    border-radius: 50%;
  }
  .list-left-line{
    width: 10px;
    height: 175px;
    background: papayawhip;
    margin: 5px 0 0 5px;
  }
  .list-right{
    float: right;
    width: 95%;
    background-image: url(./journal-pic.png);
    background-size: 100%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
    height: 200px;
    padding: 12px;
  }
  .list-right span{
    color: #8a8a8a;
    padding: 10px 0;
    display: block;
  }
  .list-right span img{
    vertical-align: bottom;
  }
</style>

<template>
    <div class="mood">
      <div class="mood-header">
        <h2>My mood</h2>
        <div class="mood-header-line"></div>
      </div>
      <div class="mood-lists">
        <ul>
          <li v-for="(mood, index) in moodList" class="mood-list">
            <div class="mood-img">
              <img :src="mood.img"/>
            </div>
            <div class="mood-content">
              <h3>{{ mood.title }}</h3>
              <p>{{ mood.content }}</p>
            </div>
            <div class="mood-time">{{ mood.time }}</div>
            <div class="delete-mood" @click="deleteMood(`${index}`)">删除</div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          moodList: this.$store.state.moods
        }
      },
      methods: {
        deleteMood (index) {
          this.$store.commit('deleteMood', index)
        }
      }
    }
</script>
<style scoped>
  .mood{
    width: 100%;
  }
  .mood-header{
    width: 200px;
    text-align: center;
    height:40px;
    margin: 50px auto;
  }
  .mood-header-line{
    width: 80px;
    height: 5px;
    background: #efc14e;
    margin: 12px auto;
  }
  .mood-lists{
    width: 100%;
  }
  .mood-lists ul{
    width: 90%;
    margin: 0 auto;
    clear: both;
  }
  .mood-list{
    display: inline-block;
    width: 100%;
    height: 200px;
    list-style-type: none;
    background: #ffffff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
    margin: 5px auto;
    position: relative;
  }
  .mood-img{
    float: left;
    width: 232px;
    height: 163px;
    margin: 20px;
  }
  .mood-img img{
    width: 232px;
    height: 163px;
  }
  .mood-content{
    width: 900px;
    height: 163px;
    float: right;
    margin: 20px;
  }
  .mood-time{
    position: absolute;
    bottom: 10px;
    right: 70px;
    color: #ccc;
  }
  .delete-mood{
    position: absolute;
    bottom: 10px;
    right: 20px;
    color: #ccc;
    cursor: pointer;
  }
  .delete-mood:hover{
    color: #efc14e;
  }
</style>

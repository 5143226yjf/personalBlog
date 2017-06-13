<template>
    <div class="mood">
      <div class="mood-header">
        <h2>My mood</h2>
        <div class="mood-header-line"></div>
      </div>
      <div class="mood-lists">
        <ul>
          <li v-for="mood in moodList" class="mood-list">
            <div class="mood-img">
              <img :src="mood.img"/>
            </div>
            <div class="mood-content">
              <h3>{{ mood.title }}</h3>
              <p>{{ mood.content }}</p>
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
          moodList: this.$store.state.moods
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
    margin: 5px auto;
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
</style>

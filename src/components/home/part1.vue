<template>
  <div id="part1">
    <router-link to="/home" class="back">返回</router-link>
    <div class="content">
      这是part1
      <img class="ii" :src="imgUrl" v-show="imgUrl">
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'

  export default {
    data() {
      return {
        imgUrl: '',
      }
    },
    created() {
      var _this = this
      this.$http.get('/api/bing_pic').then((res) => {
//        console.log(res.data)
        _this.imgUrl = res.data
      }).catch((error) => {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #part1
    position: absolute
    top: 0
    left: 0
    bottom: 0
    width: 100%
    background: #46e4ff;
    .back
      display: block
      text-align: left
      padding: 8px
      font-size: 16px
      color: white
    .content
      .ii
        position: absolute
        top: 0
        left: 0
        bottom: 0
        width: 100%
        height: 100%
</style>

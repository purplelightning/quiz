<template>
  <div id="quiz">
    <h3>Question</h3>

    <div class="btn" @click="initialQue">开始</div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    methods: {
      initialQue() {
//        console.log('aaaaa')
        this.$router.push('item')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #quiz
    position: absolute
    top: 80px
    left: 0
    bottom: 0
    width: 100%
    background: #77d337
    .btn
      display: block
      margin: 40px auto
      padding: 10px
      width: 100px
      font-size: 20px
      text-align: center
      color: red
      border-radius: 8px
      background: #ff9c54
</style>

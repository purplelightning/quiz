<template>
  <div id="quiz">
    <h3>Question</h3>

    <router-link to="item" class="btn" @click="initialQue">开始</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'

  export default {
    methods:{
      ...mapActions([
        'initializeData'
      ]),
      initialQue(){
        this.initializeData()
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
      margin:40px auto
      padding:10px
      width:100px
      font-size: 20px
      text-align: center
      color:red
      border-radius:8px
      background: #ff9c54
</style>

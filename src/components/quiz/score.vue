<template>
  <div id="score">
    <div>You have done all the questions</div>
    <div>You have scored：{{finalScore}}</div>
    <div class="begin">开始时间： {{}}</div>
    <div class="end">结束时间： {{}}</div>
    <div class="time">共用时间： {{}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        count: 0,
        rightAnswer: [2, 5, 12, 14, 19]
      }
    },
    computed: {
      ...mapState([
        'answerId',
      ]),
      finalScore() {
        this.answerId.forEach((answer, index) => {
          if (answer === this.rightAnswer[index]) {
            this.count++
          }
        })
        return 20 * this.count
      },
    },
    created() {
      console.log(this.answerId)
      this.count = 0
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #score
    position: absolute
    top: 0
    bottom: 0
    left: 0
    width: 100%
    padding: 30px
    background: #ff5a37
</style>

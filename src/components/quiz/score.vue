<template>
  <div id="score">
    <div class="text">You have done all the questions</div>
    <div class="text">You have scored：{{finalScore}}</div>
    <div class="text">开始时间： {{beginTime | formatDate}}</div>
    <div class="text">结束时间： {{endTime | formatDate}}</div>
    <div class="text">共用时间： {{(endTime - beginTime) | compuTime}}秒</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import {formatDate} from 'common/js/date'

  export default {
    data() {
      return {
        count: 0,
        rightAnswer: [2, 5, 12, 14, 19]
      }
    },
    computed: {
      ...mapState([
        'answerId', 'beginTime', 'endTime'
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
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      },
      compuTime(time) {//计算时间
        time = (time / 1000).toFixed(2)
        return time
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #score
    position: absolute
    top: 0
    bottom: 0
    left: 0
    width: 100%
    box-sizing: border-box
    padding: 30px
    background: linear-gradient(to bottom right, rgba(255, 0, 0, 1), rgba(0, 0, 255, 1))
    .text
      margin: 20px auto
      color: white
      font-size: 20px
</style>

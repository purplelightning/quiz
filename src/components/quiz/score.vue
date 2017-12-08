<template>
  <div id="score">
    <div>You have done all the questions</div>
    <div>You have scored：{{finalScore}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        count: 0
      }
    },
    computed: {
      ...mapState([
        'answerId',
      ]),
      finalScore() {
        if (parseInt(this.answerId[0]) === 2) {
          this.count++
        }
        if (parseInt(this.answerId[1]) === 5) {
          this.count++
        }
        if (parseInt(this.answerId[2]) === 12) {
          this.count++
        }
        if (parseInt(this.answerId[3]) === 14) {
          this.count++
        }
        if (parseInt(this.answerId[4]) === 19) {
          this.count++
        }
        return 20 * this.count
      },
    },
    created() {
      console.log(this.answerId)
      this.count=0
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
    background: #ff5a37
</style>

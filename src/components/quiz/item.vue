<template>
  <div class="item">
    <div class="top">题目{{itemNum}}</div>
    <div class="content">
      <div class="title">{{answerArray.topic_name}}</div>
      <ul>
        <li v-for="(item,index) in answerArray.topic_answer" @click="chooseAnswer(item.topic_answer_id)">
          <span class="option_style"
                v-bind:class="{'active':choosedIndex===(index+1)}">{{item.topic_answer_id}}</span>
          <span class="option_detail">{{item.answer_name}}</span>
        </li>
      </ul>
    </div>
    <button class="btn" @click="nextQuestion" v-show="itemnum!==5">下一题</button>
    <button @click="submitAnswer" class="btn" v-show="itemnum===5">交卷</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions, mapState} from 'vuex'

  export default {
    data() {
      return {
//        questions: {
//          A: '错误答案',
//          B: '正确答案',
//          C: '错了',
//          D: '还是错了'
//        },
        itemnum: this.itemNum,//用data获取题目号
        answerArray: [],//每个题目的答案列表
        choosedId: null//选中的答案的id
      }
    },
    computed: {
      ...mapState([
        'itemNum',//题目号
        'answerId',//选择的答案列表
        'itemDetail'//答案详情
      ]),
      //选中的索引，用来确定答案的选中状态
      choosedIndex() {
        if (this.choosedId === null) {
          return null
        } else if (this.choosedId % 4 !== 0) {
          return this.choosedId % 4
        } else {
          return 4
        }
      }
    },
    methods: {
      ...mapActions([
        'initializeData', 'addNum','remEnd','remBegin'
      ]),
      //选中的答案
      chooseAnswer(id) {
        this.choosedId = id
      },
      //下一题，判断是否选择了答案，并传递选择的答案id
      nextQuestion() {
        if (this.choosedId !== null) {
          this.addNum(this.choosedId)
          this.choosedId = null
        } else {
          alert('请选择答案')
        }
      },
      submitAnswer() {
        if (this.choosedId !== null) {
          this.addNum(this.choosedId)
          this.choosedId = null
          this.remEnd()//记录答题结束时间
          this.$router.push('score')
        } else {
          alert('请选择答案')
        }
      }
    },
    watch: {
      itemNum() {
        this.itemnum = this.itemNum
        this.answerArray = this.itemDetail[this.itemNum - 1]
      }
    },
    created() {
      this.initializeData()
      this.remBegin()
//      console.log(this.itemDetail[this.itemNum - 1])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item
    position: absolute
    top: 0
    left: 0
    bottom: 0
    width: 100%
    background: #45c8ff
    .top
      margin: 40px auto
      text-align: center
      font-size: 24px
    .content
      position: absolute
      left: 35%
      .option_style
        display: inline-block
        margin: 10px auto
        width: 15px
        height: 15px
        padding: 4px
        text-align: center
        line-height: 15px
        broder: 1px solid black
        border-radius: 50%
        font-size: 20px
        &.active
          background: #ffd829

    .btn
      display: block
      margin-top: 300px

</style>

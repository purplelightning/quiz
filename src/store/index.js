import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  itemNum: 0,//第几题
  beginTime:0,
  endTime:0,
  itemDetail: [
    {
      'topic_name': '题目一',
      'topic_answer': [
        {
          'topic_answer_id': 1,
          'topic_id': 20,
          'answer_name': '答案aaaa',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 2,
          'topic_id': 20,
          'answer_name': '正确答案',
          'is_correct_answer': 1
        },
        {
          'topic_answer_id': 3,
          'topic_id': 20,
          'answer_name': '答案cccc',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 4,
          'topic_id': 20,
          'answer_name': '答案aaaa',
          'is_correct_answer': 0
        },
      ]
    },
    {
      'topic_name': '题目二',
      'topic_answer': [
        {
          'topic_answer_id': 5,
          'topic_id': 20,
          'answer_name': '正确答案',
          'is_correct_answer': 1
        },
        {
          'topic_answer_id': 6,
          'topic_id': 20,
          'answer_name': '错误答案',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 7,
          'topic_id': 20,
          'answer_name': '答案cccc',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 8,
          'topic_id': 20,
          'answer_name': '错了',
          'is_correct_answer': 0
        },
      ]
    },
    {
      'topic_name': '题目三',
      'topic_answer': [
        {
          'topic_answer_id': 9,
          'topic_id': 20,
          'answer_name': '答案aaaa',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 10,
          'topic_id': 20,
          'answer_name': '错误答案',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 11,
          'topic_id': 20,
          'answer_name': '答案cccc',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 12,
          'topic_id': 20,
          'answer_name': '正确答案',
          'is_correct_answer': 1
        },
      ]
    },
    {
      'topic_name': '题目四',
      'topic_answer': [
        {
          'topic_answer_id': 13,
          'topic_id': 20,
          'answer_name': '答案aaaa',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 14,
          'topic_id': 20,
          'answer_name': '正确答案',
          'is_correct_answer': 1
        },
        {
          'topic_answer_id': 15,
          'topic_id': 20,
          'answer_name': '答案cccc',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 16,
          'topic_id': 20,
          'answer_name': '错误无语',
          'is_correct_answer': 0
        },
      ]
    },
    {
      'topic_name': '题目五',
      'topic_answer': [
        {
          'topic_answer_id': 17,
          'topic_id': 20,
          'answer_name': '答案aaaa',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 18,
          'topic_id': 20,
          'answer_name': '错误答案',
          'is_correct_answer': 0
        },
        {
          'topic_answer_id': 19,
          'topic_id': 20,
          'answer_name': '正确答案',
          'is_correct_answer': 1
        },
        {
          'topic_answer_id': 20,
          'topic_id': 20,
          'answer_name': 'c是对的',
          'is_correct_answer': 0
        },
      ]
    }
  ],
  answerId: []

}


export default new Vuex.Store({
  state,
  actions,
  mutations
})

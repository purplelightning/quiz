const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMEMBER_ANSWER = 'REMEMBER_ANSWER'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const REMEMBER_BEGIN = 'REMEMBER_BEGIN'
const REMEMBER_END = 'REMEMBER_END'

export default {
  //点击进入下一题
  [ADD_ITEMNUM](state) {
    state.itemNum += 1
  },
  //记录答案
  [REMEMBER_ANSWER](state, id) {
    state.answerId.push(id)
  },
  //记录开始时间
  [REMEMBER_BEGIN](state) {
    state.beginTime =new Date().getTime()
  },
  //记录结束时间
  [REMEMBER_END](state) {
    state.endTime = new Date().getTime()
  },
  //初始化数据
  [INITIALIZE_DATA](state) {
    state.itemNum = 1
    state.answerId = []
    state.beginTime = 0
    state.endTime = 0
  }

}

const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMEMBER_ANSWER = 'REMEMBER_ANSWER'
const INITIALIZE_DATA='INITIALIZE_DATA'

export default {
  //点击进入下一题
  [ADD_ITEMNUM](state) {
    state.itemNum += 1
  },
  //记录答案
  [REMEMBER_ANSWER](state, id) {
    state.answerId.push(id)
  },
  //初始化数据
  [INITIALIZE_DATA](state){
    state.itemNum=1
    state.answerId=[]
  }

}

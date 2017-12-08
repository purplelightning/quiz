export default {
  addNum({commit, state}, id) {
    //点击进入下一题,记录选择的答案
    commit('REMEMBER_ANSWER', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM')
    }
  },
  initializeData({commit}) {
    commit('INITIALIZE_DATA')
  }
}

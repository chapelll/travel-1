import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity',city)
  //   }
  // },
  // 可以不用触发action，组件直接使用commit触发mutations改变state的值
  modules: {
  }
})

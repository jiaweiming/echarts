import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex);

const state = {
  totalCount: 0,
  initItem:["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  initValue:[5, 20, 36, 10, 10, 20],
  lastOneData:[5, 20, 36, 10, 10, 20],
  lastTenData:[],
  list:[
      [22,33,44,55,66,77],[11,54,67,89,345,66],[56,76,88,99,32,50],
      [43,67,54,78,90,76],[24,534,56,78,54,24],[54,77,53,53,33,44],
      [85,90,43,11,22,33],[49,38,98,89,33,22],[43,76,55,66,12,90],
      [478,567,334,665,444,999],[473,890,894,873,110,432],[1234,2345,3456,4567,67789,30]
    ]
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store


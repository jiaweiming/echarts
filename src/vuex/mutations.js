import axios from 'axios'
import Vue from 'vue'
import _ from 'underscore'

export const updateTenSeconds = (state) => {  //更新数据源,目前是随机
  const num = Math.floor(Math.random()*11);
  const randomArray = state.list[num];
  Vue.set(state,'initValue',randomArray); 
  state.dataAll.push(randomArray);  //自动存储到data里
};

export const sendToHistory = (state) => {
  state.dataHistory.push(state.initValue);  //点击存入history里
  // let myArr = state.dataHistory.splice(-10,10);
  console.log(state.dataHistory)
}






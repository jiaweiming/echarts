import axios from 'axios'
import Vue from 'vue'
import _ from 'underscore'

export const updateTenSeconds = (state) => {  //更新数据源
  const num = Math.floor(Math.random()*11);
  Vue.set(state,'initValue',state.list[num]); //修改当前数据数组
  Vue.set(state,'lastOneData',state.list[num]); //修改最后一次单个数据
  state.lastTenData.push(state.list[num]);  //存入历史数据组
};

export const _changeCurrency = (state, data) => {
  let base = 'USD';
  let _data = ['CNY', 'JPY', 'USD', 'GBP', 'CAD'];
  let symbols = 'CNY,JPY,USD,GBP,CAD';
  let url = 'http://data.fixer.io/api/latest?access_key=c83da9c15f0acb87196b680b91ec7c09&symbols=' + symbols;

  axios.get(url).then(function (res) {
    _data.map((item, index) => {
      if (item === data) {
        switch (index) {
          case 0:
            state.currencyType = 'CNY';
            state.currencyRate = res.data.rates.CNY;
            break;
          case 1:
            state.currencyType = 'JPY';
            state.currencyRate = res.data.rates.JPY;
            break;
          case 2:
            state.currencyType = 'USD';
            state.currencyRate = res.data.rates.USD;
            break;
          case 3:
            state.currencyType = 'GBP';
            state.currencyRate = res.data.rates.GBP;
            break;
          case 4:
            state.currencyType = 'CAD';
            state.currencyRate = res.data.rates.CAD;
            break;
          default:
            state.currencyType = '';
            state.currencyRate = ''
        }
      }
    })
  })
};



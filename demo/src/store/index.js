import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);


const state = {
  bb: '我是index'
};
const getters = {

};
const mutations = {

};
const actions = {

};



const storeList = {};
// 1.获取router文件夹上下文
const jsAll = require.context('./modules', true, /\.js$/);
// 2.封装返回Module的函数
const requireAll = requireContext => requireContext.keys().map(requireContext);
// 3.循环
requireAll(jsAll).forEach(({default:item})=>{
  storeList[item.name] = item;
});
// console.log(requireAll(jsAll)); // [Module, Module]
console.log(storeList);


export default new Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    ...storeList
  },
});

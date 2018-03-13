import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // use代表使用插件

const store = new Vuex.Store({
	state: {
		list: []
	},
	mutations: {
		addShopM: function(state, data) {
			state.list.push(data);
		}
	},
	actions: {
		addShopA: function({commit}, data) {
			commit("addShopM", data);
		}
	}
})

export default store;
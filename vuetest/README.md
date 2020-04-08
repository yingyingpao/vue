> 安装vue项目

    npm install -global vue-cli
	vue init webapck 项目名称
	cd 项目名称
	npm run dev

> 安装vuex

    npm install vuex --save

## 步骤 ##

1. 项目src目录下边新建store文件，在该目录下边新建一个index.js
	
	    import Vue from 'vue'
		import Vuex from 'vuex'
		
		Vue.use(Vuex)
		
		// 创建vuex实例
		const store = new Vuex.Store({
		    state:{},
		    mutations:{},
		    actions:{},
		    getters:{}
		})
	
		export default store;

2. 在src的入口文件中引入store文件，在文件中添加

		// 引入vuex
		import store from './store'
		new Vue({
		  el: '#app',
		  router,
		  store,
		  components: { App },
		  template: '<App/>'
		})


















		
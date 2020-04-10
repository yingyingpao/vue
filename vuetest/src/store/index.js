import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建vuex实例
const store = new Vuex.Store({
    state:{
        count:2,
        stage:0
    },
    mutations:{
        muCount:function(state){
            console.log(state)
            state.count++;
        }
    },
    actions:{
        asyncCount:function(state){
            console.log(state)
        }
    },
    getters:{
        showCount:function(state){
            return state.count+'0000';
        }
    }
})
export default store;

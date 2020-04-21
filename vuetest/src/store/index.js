import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

// 创建vuex实例
const store = new Vuex.Store({
    state:{
        // 页面的数据
        list:[],
        // 页面的input框
        inputVal:'aaa',
        // 新数据的id
        newId:5
    },
    mutations:{
        listMutation(state,list){
            state.list = list;
        },
        itemHandler(state,item){
            state.inputVal = item
        },
        // 添加列表
        addList(state,item){
            console.log(item)
            let obj = {
                "id":state.newId++,
                "done": false,
                "title":item
            }
            state.list.push(obj);
            // 清空input的值
            state.inputVal = '';
        },
        checkItem(state,item){
            let i = state.list.findIndex(index => index.id == item);
            state.list[i].done = !state.list[i].done;
        },
        removeItem(state,item){
            let i = state.list.findIndex(index => index.id == item);
            state.list.splice(i,1);
            // state.list[i].done = !state.list[i].done;
        }
    },
    actions:{
        listAction(context){
            Axios.get('./static/app.json').then((data)=>{
                console.log(data.data)
                context.commit('listMutation', data.data)
            })

        }
    },
    getters:{

    }
})
export default store;

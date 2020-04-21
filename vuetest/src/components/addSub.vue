<template>
    <div>
        <a-input placeholder="请输入任务" class='inputAdd' :value='inputVal' @change='inputHandler'/>
        <a-button type="primary" @click='searchHandler'>搜索</a-button>
        <a-list size="small" bordered :dataSource="list">
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-checkbox :checked=item.done @change='checkHandler(item.id)'></a-checkbox>
                <span>{{ item.title }}</span>
                <span @click='removeItem(item.id)'>删除</span>
            </a-list-item>
            <div slot="header">Header</div>
            <div slot="footer">Footer</div>
        </a-list>
        <p>{{list}}</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Add from '../view/add.vue';
import Subs from '../view/subs.vue';
export default {
    name:'addSub',
    data:function(){
        return {
        }
    },
    methods:{
        // input框发生变化
        inputHandler(e){
            console.log(e.target.value)
            this.$store.commit('itemHandler',e.target.value)
        },
        searchHandler(){
            if(this.inputVal.trim().length<=0){
                return false;
            }
            this.$store.commit('addList',this.inputVal)
        },
        checkHandler(obj){
            this.$store.commit('checkItem',obj)
        },
        removeItem(obj){
            this.$store.commit('removeItem',obj)
        }
    },
    components:{
        Add,
        Subs
    },
    created(){
        this.$store.dispatch('listAction');
    },
    computed:{
        ...mapState(['list','inputVal'])
    }
}
</script>
<style lang="">
    .inputAdd{
        width:200px;
    }
</style>
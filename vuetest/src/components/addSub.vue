<template>
    <div>
        <a-input placeholder="请输入任务" class='inputAdd' :value='inputVal' @change='inputHandler'/>
        <a-button type="primary" @click='searchHandler'>搜索</a-button>
        <a-list size="small" bordered :dataSource="showList">
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-checkbox :checked=item.done @change='checkItem(item.id)'></a-checkbox>
                <span>{{ item.title }}</span>
                <span @click='removeItem(item.id)'>删除</span>
            </a-list-item>
            <div slot="header">Header</div>
            <div slot="footer">
                <span>{{showComplete}}条未完成</span>
                <a-button :type="type=='all'?'primary':''" @click='changeType("all")'>全部</a-button>
                <a-button :type="type=='albind'?'primary':''" @click='changeType("albind")'>已完成</a-button>
                <a-button :type="type=='unalbind'?'primary':''" @click='changeType("unalbind")'>未完成</a-button>
            </div>
        </a-list>
        <p>{{list}}</p>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import Add from '../view/add.vue';
import Subs from '../view/subs.vue';
export default {
    name:'addSub',
    data:function(){
        return {
        }
    },
    methods:{
        // 将mutation中的方法映射为当前组件的methods方法
        // 将action中的方法映射为当前组件的methods方法
        ...mapMutations(['itemHandler','addList','checkItem','removeItem','changeType']),
        ...mapActions(['listAction']),
        // input框发生变化
        inputHandler(e){
            console.log(e.target.value)
            this.itemHandler(e.target.value)
        },
        // 点击搜索按钮
        searchHandler(){
            if(this.inputVal.trim().length<=0){
                return false;
            }
            this.addList(this.inputVal)
        }
    },
    components:{
        Add,
        Subs
    },
    created(){
        // 加载list数据
        this.listAction();
    },
    computed:{
        // 将store中的state数据映射为当前的计算属性
        // 将getter返回的数据映射为当前组件的计算属性
        ...mapState(['list','inputVal','type']),
        ...mapGetters(['showComplete','showList'])
    }
}
</script>
<style lang="">
    .inputAdd{
        width:200px;
    }
</style>
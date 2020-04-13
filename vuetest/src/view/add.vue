<template>
    <div>
        <p>现在的值为:{{stage}}</p>
        <button @click='addHandle'>+1 </button>
        <button @click='addInfinite'>+N</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'add',
    data:function(){
        return {
        }
    },
    methods:{
        addHandle(){
            console.log(this.$store.state.stage)
            // 不能直接修改state中的值
            // this.$store.state.stage++;
            this.$store.commit('addStage');
        },
        addInfinite(){
            // commit的作用就是调用某个mutation函数
            this.$store.commit('addInfinite',2)
        }
    },
    computed: {
        ...mapState(['stage'])
    },
}
</script>




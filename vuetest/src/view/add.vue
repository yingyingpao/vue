<template>
    <div>
        <h3>加法</h3>
        <h5>{{$store.getters.showCount}}</h5>
        <h5>{{showCount}}</h5>
        {{count}}
        <button @click='addHandler'>点击</button>
        <button @click='addHandlerAsync'>async 点击</button>
        <button @click='addNAsync'>async 点击</button>
        <button @click='addNasyncAction(6)'>点击</button>
    </div>
</template>

<script>
import {mapMutations, mapState,mapActions,mapGetters} from 'vuex'
export default {
    name:'add',
    data:function(){
        return {
        }
    },
    methods:{
        ...mapMutations(['addNum']),
        ...mapActions(['addNasyncAction']),
        addHandler(){
            this.addNum()
        },
        addHandlerAsync(){
            // 这里的dispatch函数，专门用来触发action
            this.$store.dispatch('addNumAsyncAction')
        },
        addNAsync(){
            this.$store.dispatch('addNasyncAction',4)
        }
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['showCount'])
    },
}
</script>




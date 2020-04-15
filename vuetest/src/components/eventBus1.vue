<template>
    <div>
        {{name}}
        <!-- <button @click='handle'>获取数据</button> -->
    </div>
</template>

<script>
import Bus from '../router/eventBus'
export default {
    name:'eventBus1',
    data(){
        return {
            name:'333333'
        }
    },
    methods:{
    },
    created(){
        let _this = this;
        Bus.$on('add',function(val){
            console.log('接收数据')
            console.log(val)
            _this.name=val;
        })
    },

}
</script>
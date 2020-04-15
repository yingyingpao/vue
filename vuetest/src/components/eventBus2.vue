<template>
    <div>
        <button @click='add'>发送数据</button>
    </div>
</template>

<script>
import Bus from '../router/eventBus'
export default {
    name:'eventBus1',
    data(){
        return {
            
        }
    },
    methods:{
        add(){
            Bus.$emit('add','123')
        }
    },
    beforeDestroy() {
        // eventBus.$off('add');
    }
}
</script>
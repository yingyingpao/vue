<template>
    <div>
        <h3>加法</h3>
        <p>{{$store.state.stage}}</p>
        <add></add>
        <hr>
        <h3>减法</h3>
        <p>{{$store.state.stage}}</p>
        <subs></subs>
    </div>
</template>

<script>
import Add from '../view/add.vue';
import Subs from '../view/subs.vue';
export default {
    name:'addSub',
    data:function(){
        return {

        }
    },
    components:{
        Add,
        Subs
    }
}
</script>
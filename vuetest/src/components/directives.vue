<template>
    <div>
        <h2 v-dir='name'></h2>
        <bus></bus>
        <buses></buses>
    </div>
</template>
<style lang="">
    
</style>
<script>
import bus from './eventBus1'
import buses from './eventBus2'
export default {
    name:'directives',
    data(){
        return {
            name:'hello'
        }
    },
    components:{
        bus,
        buses
    },
    // 创建指令
    directives:{
        dir:{
            inserted(el){
                // console.log(el)
            },
            bind(el,binding,vnode){
                // console.log(el)
                // console.log(binding)
                // console.log(vnode)
                el.style.background='red';
            }
        }
    }
}
</script>

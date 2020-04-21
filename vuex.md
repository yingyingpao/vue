# 概述 #

> 组件之间共享数据的方式

父向子传值:v-bind属性绑定

子向父传值:v-on事件绑定

兄弟之间组件共享数据:eventBus
	
	$on接收数据的那个组件
	$emit发送数据的那个组件

> vuex

vuex是实现组件全局状态(数据)管理的一种机制,可以方便实现组件之间数据共享。

> 使用vuex统一管理状态的好处

	能够在vuex中集中管理共享的数据，易于开发和后期维护
	能够高效的实现组件之间的数据共享，提高开发效率
	存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

> 什么样的数据适合存储在vuex中

	一般情况下，只有组件之间共享的数据，才有必要存储在vuex中;对于组件中的私有数据，依旧存储在组件自身的data中即可.（具体情况具体分析）

> vuex的核心概念
	
- state

	State提供唯一的公共数据源，所有共享的数据都要统一放到Store中的state中进行存储
	
	1. 	组件中访问state的第一种方式  this.$store.state.全局数据名称
	2. 	组件访问state的第二种方式  this.$store.state
	
			1.从vuex中按需导入mapState函数
			important {mapState} from 'vuex'
			通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性
			//将全局数据映射为当前组件的计算属性
			computed:{
				...mapState(['count'])
			}



- Mutation

Mutation用于变更store中的数据

1. 只能通过mutation用于变更store中的数据，不可以直接操作store中的数据；(无法跟踪是哪个组件修改了state中的数据)
2. 通过这种方式虽然操作起来稍微繁琐一些。但是可以集中监控所有数据的变化
3. 
		方法一:
	    demo(直接提交mutation):
		 subStage(state){
	        state.stage--;
	    },
		 this.$store.commit('subStage')
		 带参数的提交mutation
		 subInfinite(state,num){
	         state.stage-=3;
	     }
		 this.$store.commit('subInfinite',2);
		方法二:
		从vuex中按需导入，mapMutations
		important {mapMutations} from 'vuex'
		通过刚才导入的mapMutations函数,将需要的mutations函数，映射为当前组件的methods方法:
		..mapMutations([])
		
		
## Actions ##

action用于处理异步任务

如果通过异步操作变更数据，必须通过action，但是在action中还是要通过触发mutation的方式变更数据
方法一:

	actions:{
        addNumAsyncAction(context){
            // 在action中不能直接修改state中的数据，必须通过context.commit()来触发整个mutation
            setTimeout(() => {
                context.commit('addNumAsync')
            }, 1000)
        }
    }

	addHandlerAsync(){
        // 这里的dispatch函数，专门用来触发action
        this.$store.dispatch('addNumAsyncAction')
    }

方法二:

	从vuex中按需导入mapActions函数
	import {mapActions} from 'vuex'
	按照刚才导入的mapActions函数，将需要的actions函数,映射为当前组件的methods方法
	methods:{
		...mapActions([])
	}
	<button @click='addNasyncAction(6)'>点击</button>

## getter ##

getter用于对store中的数据进行加工处理形成新的数据(getter不会修改store中的原数据)
1.Getter可以对store中已有的数据加工处理后形成新的数据，类似于vue中的计算属性
2.Store中数据发生变化，Getter的数据也会跟着发生变化

	方法一:
	this.$store.getters('')
	方法二:
	从vuex中按需导入mapGetters函数
	import {mapGetters} from 'vuex';
	将需要的getters映射为当前组件的computed计算属性
	...mapGetters([])


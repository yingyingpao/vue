## vue自定义指定 ##

	自定义指令解决的问题或者说是使用的场景是对普通DOM元素进行底层操作。

指令也分全局自定义指令和局部指令.
	
全局自定义指令创建
	
	let Opt = {
	    bind:function(el,binding,vnode){ },
	    inserted:function(el,binding,vnode){ },
	    update:function(el,binding,vnode){ },
	    componentUpdated:function(el,binding,vnode){ },
	    unbind:function(el,binding,vnode){ },
	}
	Vue.directive('demo', Opt)

局部指令创建(需要在组件的钩子函数中创建)

	Directives: {
	    Demo:     Opt
	}

> 自定义指令钩子函数

     1.bind: 此钩子函数只会被调用一次，可以定义一个在绑定时执行一次的初始化动作

     2.inserted: 当被绑定的元素插入到父元素中是低调用（此处的父元素不局限于document中）

     3.update: 不论被绑定的值是否发生了变化，在末班更新时都会被调用，

     4.componentUpdated:被绑定的元素在模板完成一次更新周期时调用，

     5.unbind: 只调用一次，元素解绑时调用

    
> 参数

      1.el: 指令所绑定的DOM元素，可以直接用来操作DOM

       2.binding: 一个对象，包含以下属性

             name: 指令的名称

             value： 指令绑定的值

             oldValue: 指令绑定前一个值

             expression: 绑定值的字符串形式

             arg： 传给指令的参数

             modifiers: 这是一个包含修饰符的对象


## 兄弟组件传值 ##

1. 方法1:父组件做中转
2. 方法2:eventBus Bus中央时间线

	    Bus.js
		import Vue from 'vue'
		export const = new Vue;
		或者main.js
		window.Bus = new Vue;

		兄弟一(发布事件)
		methods:{
			BUs.$emit('aa'，123)	
		}
		兄弟二(接收事件)
		created(){
			Bus.$on('aa',(val)=>{

			})
		}

## import和require的区别 ##

import和require都是被模块化使用
	
		1.a.require是CommonJs的语法（AMD规范引入方式），CommonJs的模块是对象。
		  b.import是es6的一个语法标准（浏览器不支持，本质是使用node中的babel将es6转码为es5再执行，import会被转码为require），es6模块不是对象
        2. a.require是运行时加载整个模块（即模块中所有方法），生成一个对象，再从对象上读取它的方法（只有运行时才能得到这                个对象,不能在编译时做到静态化），理论上可以用在代码的任何地方       
		   b.import是编译时调用，确定模块的依赖关系，输入变量（es6模块不是对象，而是通过export命令指定输出代码，再通过import输入，只加载import中导的方法，其他方法不加载），import具有提升效果，会提升到模块的头部（编译时执行,export和import可以位于模块中的任何位置，但是必须是在模块顶层，如果在其他作用域内，会报错.es6这样的设计可以提高编译器效率，但没法实现运行时加载 
		3. a.require是赋值过程，把require的结果（对象，数字，函数等），默认是export的一个对象，赋给某个变量（复制或浅拷贝）
           b.import是解构过程（需要谁，加载谁）
 写法：

	1.require/exports（仅有下面的三种简单写法）
	
   const    a=require('a')      //真正被require出来的是来自module.exports指向的内存块内容

   exports.a=a             //exports 只是 module.exports的引用，辅助module.exports操作内存中的数据

   module.exports=a
	
		2.import / export 
  import a from 'a'

  import { default as a  } from 'a'

  import  *  as a  from 'a'

  import { fun1,fun2 } from 'a'

  import { fun1 as myfunction  } from 'a'

  import a, { fun1  } from 'a'      


export、export default的区别         

## watch与computed的区别 ##

    计算属性computed : 
	1. 支持缓存，只有依赖数据发生改变，才会重新进行计算
	2. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化
	3. computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值
	4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed
	5. 如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。

	侦听属性watch：
	1. 不支持缓存，数据变，直接会触发相应的操作；
	2. watch支持异步；
	3. 监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
	4. 当一个属性发生变化时，需要执行对应的操作；一对多；
	5. 监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数，
	   immediate：组件加载立即触发回调函数执行，
	   deep: 深度监听，为了发现对象内部值的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep无法监听到数组的变动和对象的新增，参考vue数组变异,只有以响应式的方式触发才会被监听到。

 

     

          

          






	
	
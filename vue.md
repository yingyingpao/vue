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

 

     

          

          






	
	
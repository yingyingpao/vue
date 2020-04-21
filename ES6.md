## find() ##

find()用来查找目标元素，找到就返回该元素，找不到就返回undefined
    
	let arr = [1,2,3,4,5];
	// 三个参数 i每一次迭代查找的目标元素  index每一次迭代查找的目标元素的索引  arr 被查找的数组
	let aa = arr.find((i,index,arr)=>{
		// console.log(i,index,arr)
		return i>2
	})
	let bb = arr.find((i,index,arr)=>{
		// console.log(i,index,arr)
		return i>10
	})
	console.log(aa) //5
	console.log(bb) //undefined

## findIndex() ##

findIndex()函数也是查找目标元素，找到就返回元素位置，找不到就返回-1
    			
	let arr = [1,2,3,4,5];
	let aa = arr.findIndex((i,index,arr)=>{
		return index==8
	})
	let bb = arr.findIndex((i,index,arr)=>{
		return i==2
	})
	console.log(aa) //-1
	console.log(bb) //1

## Object.is() ##

用来比较两个值严格相等，他与严格运算符(===)基本一致，不同之处只有两个:+0不等于-0 NaA等于自身
    
	let a = 1;
	let b = '1';
	console.log(a===b,Object.is(a,b)) //false false
	console.log(a==b,Object.is(a,b))  //true false
	console.log(NaN==NaN,Object.is(NaN,NaN)) //false true
	console.log(+0==-0,+0===-0,Object.is(+0,-0)) //true true false
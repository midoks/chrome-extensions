/**
 *	@function 方法基准测试函数
 *	@param callback 回调函数
 *	@param times	循环次数
 */
function benchmark(callback, times){
	if(typeof callback != 'function'){//回调函数判断
		if(this.browserName != 'IE')
			console.log('not function');
		else
			alert('not function');
	}
	if(typeof times != 'number'){
		if(this.browserName != 'IE')
			console.log('not number');
		else
			alert('not number');
	}
	var start = (new Date()).getTime();
	//循环执行
	for(var i=0; i<times; i++){
		callback();	
	}
	var end = (new Date()).getTime();
	var ResultStr = 'benchmark: time:'+(end-start)+'ms, times:'+times+' times;'+"\r\n";
	ResultStr += (end-start)/times+ 'ms/times'+"\r\n";
	if(this.browserName != 'IE')
		console.log(ResultStr);
	else
		return ResultStr;
}

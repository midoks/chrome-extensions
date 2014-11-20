//cookie设置
//
//


chrome.cookies.getAllCookieStores(function callback(cookie){
	//console.log(cookie);
	for(i in cookie){
		//console.log(i);
	}
});


//获取所有COOKIE信息
chrome.cookies.getAll({
	//url:'http://open.se.360.cn',
	//domain :'.360.cn',
	//name:'__utmc'
},function callback(cookie){
	//console.log(cookie);
	/*for(i in cookie){
		var info = cookie[i];
		console.log('序号:'+ i +" 域名:"+info.domain +
				" name:"+ info.name + " value:"+ info.value);
	}*/
});

//获取COOKIE URL NAME值
chrome.cookies.get({
	url:'http://open.se.360.cn',
	//domain :'.360.cn',
	name:'__utmc'
},function callback(cookie){
	//console.log(cookie);
});


//当cookie改变时
chrome.cookies.onChanged.addListener(function(changeInfo){
	//changeInfo.removed //-->是否真(删除或改变)
	//cookie.cookie //改变的信息
	console.log(changeInfo);
	
	//if(changeInfo.removed){//cookie被删除
		// web_Notification('事件:'+changeInfo.cause+' 域:'+
		// 	changeInfo.cookie.domain+' name:'+changeInfo.cookie.name+
		// 	'值变为:'+changeInfo.cookie.value
			
		// 	,7);
	//}
	//web_Notification(ds.host);
});


//console.log(chrome.cookies);

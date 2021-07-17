/**
 *	@func	桌面消息显示
 *	@param string method 方法使用
 *	exp1:0
 *	desktop(0,{"title":"title","message":"message", "image":"img/dd.png"},timeout);
 *	exp2:1
 *	desktop(1,{"html":"test.html"},timeout);
 */
function desktop(){
	var arg = arguments;
	var m = arg[0];//method
	var protype = arg[1];//属性
	var times = arg[2];//时间
	
	if(typeof m == 'undefined'){m = 0;}//默认方法
	if(typeof times=='undefined'){times = 3;}//默认时间

	console.log(webkitNotifications);

	if(m){//方法2
		var notification = window.webkitNotifications.createHTMLNotification(
			typeof protype['html'] == 'undefined' ? '': protype['html']			// html url 相对路径
		);

	}else{//方法1
		var notification = window.webkitNotifications.createNotification(
			typeof protype['image'] == 'undefined' ? '' : protype['image'],  	//icon相对路径
			typeof protype['title'] == 'undefined' ? '你好' : protype['title'],	//主题标题
			typeof protype['body'] == 'undefined' ? '辛苦了!' : protype['body']	//主体内容
		);
	}

	var realTime = times*1000;
	//显示
	notification.show();
	//关闭
	setTimeout(function(){
			notification.close();
	},realTime);
}

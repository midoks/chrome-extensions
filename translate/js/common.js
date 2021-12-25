/**
 *	@func	桌面消息显示
 *	@param string method 方法使用
 *	exp1:0
 *	desktop(0,{"title":"title","message","message", "image":"img/dd.png"},timeout);
 *	exp2:1
 *	desktop(1,{"html":"test.html"},timeout);
 */
// function desktop(){
// 	var arg = arguments;
// 	var m = arg[0];//method
// 	var protype = arg[1];//属性
// 	var times = arg[2];//时间
	
// 	if(typeof m == 'undefined'){m = 0;}//默认方法
// 	if(typeof times=='undefined'){times = 3;}//默认时间
// 	//判断createHTMLNotification是否存在
// 	if(!window.webkitNotifications['createHTMLNotification'] && m==1){
// 		m=0;
// 	}

// 	if(m){//方法2
// 		var notification = window.webkitNotifications.createHTMLNotification(
// 			typeof protype['html'] == 'undefined' ? '': protype['html']			// html url 相对路径
// 		);

// 	}else{//方法1
// 		var notification = window.webkitNotifications.createNotification(
// 			typeof protype['image'] == 'undefined' ? '' : protype['image'],  	//icon相对路径
// 			typeof protype['title'] == 'undefined' ? '你好' : protype['title'],	//主题标题
// 			typeof protype['body'] == 'undefined' ? '辛苦了!' : protype['body']	//主体内容
// 		);
// 	}
// 	var realTime = times*1000;
// 	notification.show();
// 	setTimeout(function(){
// 			notification.close();
// 	},realTime);
// }

// //网页web消息传递
function web_Notification(t){
	var n = new Notification(t['title'], {
		icon: "../img/logo.png",
		body: t['body']
	});
	setInterval(function(){
		n.close();
	}, 3000);
}

/**
 *	@func 解析 URL，返回其组成部分
 *  @ret array(
		[scheme] => http		//链接协议
		[host] => hostname		//主机名
		[user] => username		//用户名
		[pass] => password		//密码
		[path] => /path			//路径
		[query] => arg=value	//?后面的值
		[fragment] => anchor	//#后面的值

	);
 */
function parse_url(url){
	var parse_url = {};//返回url解析的值
	//var Role = /(http|https)\:\/\/(.*)\/(.*)\?(.*)?\#?(.*)?/;//all
	//第1个级别
	var Role1 = /(http|https)\:\/\/(.*)/;
	var all = Role1.exec(url);
	if(!all){//没有匹配出来
		//console.log('没有匹配出来:'+all);
		return false;
	}
	
	parse_url.scheme = all[1];//http协议
	
	var Sdomain = all[2];
	
	if(Sdomain == ''){//域名与之后的都没有
		console.log('域名没有:'+ Sdomain);
		return false;
	}
	var tmp = Sdomain.split('/', 2);
	var host = tmp.shift();//域名
	//parse_url.host = host;//主机名
	
	var DRole = /(.*)\:(.*)\@([^\:]*)(\:(\d*))?/;
	var uphp = DRole.exec(host);

	if(uphp){//是匹配出
		parse_url.user = typeof uphp[1] == 'null'? false: uphp[1];
		parse_url.host = typeof uphp[2] == 'null'? false: uphp[2];
		parse_url.pass = typeof uphp[3] == 'null'? false: uphp[3];
		//parse_url.port = typeof uphp[5] == 'null'? false: uphp[5];
		if(typeof uphp[5] != 'undefined'){parse_url.port = uphp[5];}
	}else{
		Erole = /([^\:]*)(\:(\d*))?/;
		var dp = Erole.exec(host);
		if(dp){
			parse_url.host = typeof dp[1] == 'null'? false: dp[1];
			//parse_url.port = typeof dp[3] == 'null'? false: dp[3];
			if(typeof dp[3] != 'undefined'){parse_url.port = dp[3];}
		}else{
			parse_url.host = host;
		}
	}
	
	if(tmp.length==0){//域名后面没有'/'
		return parse_url;
	}
	
	if(tmp[0]==''){//域名后面有'/',但无其他内容
		parse_url.path = '/';
		return parse_url;
	}

	//第2个级别
	var args = tmp[0].split('?',2);
	var path = args.shift();
	parse_url.path = '/'+path;//路径
	if(args.length==0 || args[0]==''){//?后面没有
		return parse_url;
	}	
	//第3个级别
	var anchor = args[0].split('#',2);
	var query = anchor.shift();
	parse_url.query = query;//查询的参数
	if(anchor.length==0 || anchor[0]==''){//#后面没有
		return parse_url;
	}else{//#后面有内容
		parse_url.fragment = anchor[0];
	}
	//返回对象
	return parse_url;
}

/**
 *	@func google pr 获取PR值
 *	@param stirng domain 域名
 *	@ret string url地址
 */
function google_pr(domain){
	var code = GoogleUrlBase(domain);
	//var url = 'http://toolbarqueries.google.com/tbr?client=navclient-auto&features=Rank&q=info:'+ domain + '&ch=' + code;
	var url = 'http://toolbarqueries.google.com.hk/tbr?client=navclient-auto&features=Rank&q=info:'+ domain +'&ch=' + code;
	return url;
	function GoogleUrlBase(domain){
		var SEED = "Mining PageRank is AGAINST GOOGLE'S TERMS OF SERVICE. Yes, I'm talking to you, scammer.";
		var Result = 0x01020345;
		for(var i=0; i<domain.length; ++i){
			Result ^= ((SEED[i%87]).charCodeAt(0)) ^ ((domain[i]).charCodeAt(0));//right_byte_move(Result, 9);
			Result = ((Result >> 23) & 0x1FF) | (Result << 9);
		}
		if('-' == Result.toString().substr(0, 1)){
			//取反
			Result += 0xFFFFFFFF + 1;
		}
		return "8" + dec2hex(Result);
	}

	//10进制转16进制
	function dec2hex( num ){
    	if( typeof num !== 'undefined' ){
        	return num.toString(16);
    	}
	}
}


/**
 *	@func 搜狗sr值
 *	@param string domain 域名
 *	@ret string url地址
 */
function sogou_sr(domain){
	var url = 'http://rank.ie.sogou.com/sogourank.php?ur=http://' + domain + '/';
	return url;
}


//统一的回调
function ajax_callback(url, callback){
	$.ajax({
		type:'GET',
		dataType:'text',
		url:url,
		data:{},
		success:function(data){
			callback(data);
		}
	});
}



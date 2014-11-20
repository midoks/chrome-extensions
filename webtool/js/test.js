$(document).ready(function(){
/////////////////////////////

//网页web消息传递
function web_Notification(message){
	desktop(1,{"html":"Notification.html","title":"快查网通知",
			"body":message, "image":"../img/logo.png"},
			3);
}


/**
 *	获取网站详细信息
 *	@param type 类型
 *	@param domain 域名
 *	@param callback 回调函数
 */
function site_getInfo(type, domain, callback){
	$.get('http://www.cachecha.com/api.php?jsoncallback=?',
	{t:type,dm:domain},function(data){
		callback(data);				 
	});
}

//$('#test1').click(function(){
/*chrome.browserAction.onClicked.addListener(function(tab) {
  	var tab = {};
	tab.id='123';
  	chrome.debugger.attach({tabId:tab.id}, version,
      	onAttach.bind(null, tab.id));
});*/
//});
var version = "1.0";

function onAttach(tabId) {
  if (chrome.runtime.lastError) {
    alert(chrome.runtime.lastError.message);
    return;
  }
  chrome.windows.create(
      {url: "html/http_live.html?" + tabId, type: "popup", width: 800, height: 600});
}



// benchmark(function(){

// 	$('#test1').click(function(){
// 		web_Notification('你好,没V');
// 		tabId = '1';
		

// 		console.log(chrome);
// 		var tab = {};
// 		tab.id='123';
//   		chrome.debugger.attach({tabId:tab.id}, version,
//       		onAttach.bind(null, tab.id));
		
// 	});

// 	/*$.get('http://www.cachecha.com/api.phpjsoncallback=?',
// 	{t:"whois",dm:"baidu.com"},function(data){
// 			console.log(data);
// 			//console.log('pr');
// 			web_Notification(data);
// 	});*/

// },1);


$('#test1').on('click', function(){
	console.log('test1');
	console.log(window);
	web_Notification('你好,没V');
});

/////////////////////////////
});

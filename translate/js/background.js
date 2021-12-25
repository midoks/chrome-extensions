/////////////////////////////////////////////////////////
//
//	@func 后台执行程序
//	
//
//
/////////////////////////////////////////////////////////
setInterval(function(){
  	//console.log(chrome);
  // 	chrome.windows.getCurrent(function(tab){
		// console.log(tab);
  // 	});
}, 1000);


function webReq(){
  
  var filter = {"urls": ["*://translate.google.cn/*"]};
  var options = navigator.userAgent.indexOf("Firefox") !== -1 ? ["blocking", "responseHeaders"] : ["blocking", "responseHeaders", "extraHeaders"];
  if (chrome.webRequest) {
    chrome.webRequest.onHeadersReceived.addListener(function(details) {

      details.responseHeaders.push({name:'Access-Control-Allow-Origin',value:"*"});
      details.responseHeaders.push({name:'Access-Control-Allow-Methods',value:"GET, PUT, POST, DELETE, HEAD, OPTIONS"});
      return {responseHeaders:details.responseHeaders};
    },filter, options);

  }
}
webReq();

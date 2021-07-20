$(document).ready(function(){
/////////////////////////////

function webReq(){
	
	var filter = {"urls": ["*://*/*"]};
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

/////////////////////////////
});

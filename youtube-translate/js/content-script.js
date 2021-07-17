console.log('youtube translate content script!');


chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
	switch(request.type) {
		case 'get':
			fetch(request.url)
				.then(function(response) { return response.json() })
				.then(function(json) { return sendResponse(json) })
				.catch(function(error) { return sendResponse(null) });
		break;
		case 'post':
			fetch(request.url, {
				method: 'POST',
				mode: 'cors',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: JSON.stringify(request.data)
			})
				.then(function(response) { return response.json() })
				.then(function(json) { return sendResponse(json) })
				.catch(function(error) { return sendResponse(null) });
		break;
		// 你可以定义任意内容，使用sendResponse()来返回它
		case 'test':
			sendResponse({'msg': 'test'});
		break;
	}
});

var filter = {"urls": ["*://*/*"]};
if (chrome.webRequest) {
	chrome.webRequest.onBeforeRedirect.removeListener(null);
	chrome.webRequest.onBeforeRedirect.addListener(null, filter);
}


function jLoad(word,callback) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=zh&q="+word, true);
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
 	// xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");

	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    var d = JSON.parse(xhr.responseText);
	    callback(d);
	  }
	}
	xhr.send();
}


// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function()
{
	chrome.runtime.sendMessage({
		// 里面的值应该可以自定义，用于判断哪个请求之类的
		type: "post",
		url: "https://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=zh&q=Beautiful legend" // 需要请求的url
	},json => {
		console.log(json);
	});

	jLoad('Beautiful legend',function(data){
		console.log(data);
		console.log(data.sentences[0].trans);
	});
});

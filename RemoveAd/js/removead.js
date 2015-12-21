//被动接受请求
chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
    //console.log(request);
    if (typeof request.v != "undefined"){
        removeAd();
        sendResponse({response: "ok"});
    } else {
        sendResponse({});
    }
});

//主动获取
chrome.extension.sendRequest({get_remove_ad_state: "?"}, function(response) {
    if(response.remove_ad_state){
        removeAd();
       
    }
});

function removeAd(){
    console.log('去除广告!!!');
}
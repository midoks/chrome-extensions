//图标操作
var iconStatusOn = 0; //默认不开启
function updateIcon(tab){

    //console.log(tab);

    if(iconStatusOn){
        iconStatusOn = 0;
    }else{
        iconStatusOn = 1;
    }


    if(!tab){
        return;
    }

    if( tab.title =="扩展程序"){
        return;
    }

    if(!iconStatusOn){
        chrome.browserAction.setIcon({path:"../img/logo_off@16.png"});
        //console.log('关闭');
    }else{
        chrome.browserAction.setIcon({path:"../img/logo@16.png"});
        //console.log('开启');

        chrome.tabs.sendRequest(tab.id, {v: iconStatusOn }, function(response) {
        //console.log(response);
        if(response.response == 'ok'){
            console.log('good!!!');
        }
        });
    }
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();

//被动发送信息
chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
    //console.log(request);
    if (typeof request.get_remove_ad_state != "?"){
        sendResponse({remove_ad_state: iconStatusOn});
    } else {
        sendResponse({});
    }
});
//图标操作
var iconStatusOn = 0; //默认不开启
function updateIcon(){
    if(iconStatusOn){
        iconStatusOn = 0;
    }else{
        iconStatusOn = 1;
    }

    if(!iconStatusOn){
        chrome.browserAction.setIcon({path:"../img/logo_off@16.png"});
        console.log('关闭');
    }else{
        chrome.browserAction.setIcon({path:"../img/logo@16.png"});
        console.log('开启');
    }
    //console.log('test' + iconStatusOn);
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
chrome.tabs.getSelected(function(w){
	var content = w.url;
	jQuery('#qrcode').qrcode({width:200,height:200,correctLevel:0,text:content}); 

})

console.log('chrome translate content load script!');

function toast(msg, afterHidden, beforeShow){
	$.toast({
	    text: '<div style="text-align:center;">'+msg+'</div>',
	    position: 'mid-center',
	    showHideTransition: 'fade',
	    stack: false,
	    hideAfter: 5000,
	    allowToastClose: true,
	    loader: true,
	    beforeShow: function () {
	    	if (typeof beforeShow == 'function') {
	    		beforeShow();
	    	} 	
	    }, // will be triggered before the toast is shown
    	afterShown: function () {
    	}, // will be triggered after the toat has been shown
    	beforeHide: function () {
    	}, // will be triggered before the toast gets hidden
    	afterHidden: function () {
    		if (typeof afterHidden == 'function') {
	    		afterHidden();
	    	}
    	}  // will be triggered after the toast has been hidden
	});
}

function jLoad(word,callback) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=zh&q="+word, true);
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
	// jLoad('supercomputers',function(data){
	// 	console.log(data);
	// 	console.log(data.sentences[0].trans);
	// 	toast(data.sentences[0].trans);
	// });

	$('div,p,span').mouseup(function(event){
	  	var msg = window.getSelection?window.getSelection():document.selection.createRange().text;
	  	event.stopPropagation();

	  	if (msg == ""){
	  		return;
	  	}
	  	

	  	jLoad(msg,function(data){
			console.log(data);
			console.log(data.sentences[0].trans);
			toast(data.sentences[0].trans);
		});
	});

});

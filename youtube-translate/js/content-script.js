console.log('youtube translate content script!');


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


function findContent(){
	console.log($('#contents'));

}

// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function()
{

	findContent();
	

	// jLoad('Beautiful legend',function(data){
	// 	console.log(data);
	// 	console.log(data.sentences[0].trans);
	// });
});

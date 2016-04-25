
console.log("1231232");

// //创建子菜单
// function create_children_contextMenus(arrays){
// 	for(i in arrays){
// 		//console.log(arrays[i]);
// 		chrome.contextMenus.create(arrays[i], function(){
// 			if(chrome.extension.lastError)
// 				console.log(chrome.extension.lastError);
// 		});
// 	}
// }

// //创建右键菜单(父菜单)
// var id = chrome.contextMenus.create({
// 	type:"normal",
// 	title:'生成二维码',
// 	onclick:function(info, tab){
// 		//console.log(info, tab);
// 		var v = info.selectionText;
// 		if (v == "" || typeof v == "undefined" ) {
// 			web_Notification('提示', '没有选中值');
// 		}else{
// 			chrome.tabs.sendRequest(tab.id, {v: v }, function(response) {
//   				console.log(response);
//   				if(response.response == 'ok'){
//   					console.log('good!!!');
//   				}
// 			});
// 			//console.log(v);
// 		}
// 	},
// 	checked:true,
// 	enabled:true,
// 	contexts:["all"]
// }, function(){
// 	if(chrome.extension.lastError)
// 		console.log(chrome.extension.lastError);
// }); 

// // //网页web消息传递
// function web_Notification(title, body){
// 	var n = new Notification(title, {
// 		icon: "../img/logo.png",
// 		body: body
// 	});
// 	setInterval(function(){
// 		n.close();
// 	}, 2500);
// }
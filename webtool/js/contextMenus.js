/**
 *	@后台运行功能
 *	@func1	创建菜单	create_children_contextMenus 	-->创建子菜单
 *						chrome.contextMenus.create		-->创建父菜单
 *********************************************************************
 */

//创建子菜单
function create_children_contextMenus(arrays){
	for(i in arrays){
		//console.log(arrays[i]);
		chrome.contextMenus.create(arrays[i], function(){
			if(chrome.extension.lastError)
				console.log(chrome.extension.lastError);
		});
	}
}

//创建右键菜单(父菜单)
var id = chrome.contextMenus.create({
	type:"normal",
	title:'站长工具',
	onclick:function(info, tab){
		console.log(info,tab);
	},
	checked:true,
	enabled:true,
	contexts:["all"]
}, function(){
	if(chrome.extension.lastError)
		console.log(chrome.extension.lastError);
});

//子菜单
create_children_contextMenus(
[{
	type:"normal",
	title:'本站PR值',
	onclick:function(info, tab){
		var ds = parse_url(info.pageUrl);
		if(ds){
			var url = google_pr(ds.host);
			ajax_callback(url, function(data){
				//console.log(data);
				var testp;
				if('' == data){
					testp = '在PR上,没有值!';
				}else{
					testp = "PR:" + $.trim(data.substr(9, 1));
				}
				web_Notification({
  					title:ds.host,
  					body:testp
  				});
			});
		}else{
			web_Notification({
  					title:info.pageUrl,
  					body:'不是正确的地址'
  			});
		}
	},
	parentId:id,	//父菜单ID
	checked:true,
	enabled:true,
	contexts:["all"]
},
{
	type:"normal",
	title:'本站SR值',
	onclick:function(info, tab){
		var ds = parse_url(info.pageUrl);
		if(ds){
			var url = sogou_sr(ds.host);
			ajax_callback(url, function(data){
				//console.log(data.substr(10,1));
  				web_Notification({
  					title:ds.host,
  					body:"SR:" + data.substr(10, 1)
  				});
			});
		}else{
			web_Notification({
  					title:info.pageUrl,
  					body:'不是正确的地址'
  			});
		}
	},
	parentId:id,	//父菜单ID
	checked:true,
	enabled:true,
	contexts:["all"]
},
/*{
	type:"normal",
	title:'菜单测试',
	onclick:function(info, tab){
		console.log(info,tab);
	},
	parentId:id,
	checked:true,
	enabled:true,
	contexts:["all"]
}*/
]);
/////////////////////////////////////////////////////////


//$("body").append("12312313123");

//document.getElementsByTagName("div").appendChild('123123');
//console.log(document.getElementsByTagName("div"));
//document.getElementsByTagName("body").innerText = "innerText";


var svgList = $("svg");

$(svgList).bind("click", function(){


	var content = $(this).html();

	
	var thisAttr = {"version":"", "viewBox":this.getAttribute("viewBox")};

	for(i in thisAttr){
		var at = $(this).attr(i);
		if (thisAttr[i] == "") {
			thisAttr[i] = at;
		}
	}

	thisAttr["width"] = $(this).width(); 
	thisAttr["height"] = $(this).height();
	
	var attr = "";
	for(i in thisAttr){
		attr += " " + i + '="' + thisAttr[i] +'"';
	}

	var svgHtml = '<svg '+ attr +' >' + content + '</svg>';
	var data = svg2canvs(svgHtml);

	saveFile(data, "md-img-"+ new Date().Format("yyyy-MM-dd-hh-mm-ss") +".png");
});
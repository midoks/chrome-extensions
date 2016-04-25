

//$("body").append("12312313123");

//document.getElementsByTagName("div").appendChild('123123');
//console.log(document.getElementsByTagName("div"));
//document.getElementsByTagName("body").innerText = "innerText";


var svgList = $("svg");

console.log(svgList);
console.log(svgList.length);

// console.log("test");
$(svgList).bind("click", function(){

	console.log("click", this);


	var content = $(this).html();

	console.log("pp",$(this).parent().html());
	
	
	var thisAttr = {"version":"","viewbox":""};

	for(i in thisAttr){
		
		var at = $(this).attr(i);

		console.log(at);

		thisAttr[i] = at;

	}
	console.log(thisAttr);

	thisAttr["width"] = $(this).width(); 
	var height = $(this).height();

	console.log("width", thisAttr["width"], "height", height);

	var attr = "";
	for(i in thisAttr){
		attr += " " + i + '="' + thisAttr[i] +'"';
	}

	console.log(attr);



	//var svgHtml = '<svg '+ attr +'">' + content + '</svg>';
	var svgHtml = $(this).parent().removeAttr("role").removeAttr("id").html();
	console.log(svgHtml);

	// svgHtml = $(svgHtml).css("width", "10");
	// console.log("svg:",$(svgHtml).html());

	var data = svg2canvs(svgHtml);

	saveFile(data, "test.png");
});


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


});



//$("body").append("12312313123");
// setInterval(function(){


//     //console.log("--------test---------");


//     alert("11");
// }, 6000);
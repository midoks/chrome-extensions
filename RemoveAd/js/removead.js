// var timestamp = Date.parse(new Date());

// console.log(timestamp);

// window.onload = function(){
// 	var timestamp_end = Date.parse(new Date());
// 	console.log(timestamp_end);


// 	console.log(timestamp_end - timestamp);

// }

 var start_time = new Date();
 console.log(start_time);
    var end_time = "" ;
    var t = setInterval(function(){
        if(document.readyState=="complete"){aa();}
    },500)
 
    function aa(){
        end_time = new Date();
        console.log(end_time);
        console.log(end_time.getTime() -  start_time.getTime() );
        clearInterval(t);
    }
console.log("AD");
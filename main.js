 
 setInterval(function(){

 var time = new Date();
 var h = time.getHours();
 var m = time.getMinutes();
 var s = time.getSeconds();
 var ampm = ""

if(h > 12){
 	 h = h - 12
 	 ampm = "pm"

 }
 else{
 	ampm = "am"
 }


 var time = h + ":" + m + ":" + s + ampm
document.getElementById("time").innerHTML = time;



}, 1000)
 
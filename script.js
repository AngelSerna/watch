let html = document.getElementById("timehtml");

setInterval(function(){
	time = new Date();

	hours = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();

	//evitar los 0 o numeros individuales
	if(hours<10)
		hours = "0"+hours;
	if(minutes<10)
		minutes = "0"+minutes;
	if(seconds<10)
		seconds = "0"+seconds;

	html.innerHTML = hours+" : "+minutes+" : "+seconds;
},1000);

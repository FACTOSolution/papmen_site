(function countdown(){   

	var launch_date = new Date (Date.parse("Jan 22, 2018 08:00:00 GMT +1"));
	var now = new Date();
	var days; var hours; var minutes; var seconds; var rest;

	seconds = rest = Math.floor(((launch_date.getTime() - now.getTime()) / 1000));

	days = zero (Math.floor(seconds / 86400));
	seconds -= days * 86400;

	hours = zero (Math.floor(seconds / 3600));
	seconds -= hours * 3600;

	minutes = zero (Math.floor(seconds / 60));
	seconds -= minutes * 60;

	seconds = zero (Math.floor(seconds));

	function zero(n){
		return (n < 10 ? '0' : false) + n;  
	}

	rest <= 0 ? days = hours = minutes = seconds = '00' : setTimeout(countdown, 1000);

	document.getElementById('contagem').innerHTML =
		'<li><div><span>' + hours +'</span>hora' + (hours > 1 ? 's' : '') +'</div></li>'
		+'<li><div><span>' + days +'</span>dia' + (days > 1 ? 's' : '') +'</div></li>'
		+'<li><div><span>' + seconds +'</span>segundo' + (seconds > 1 ? 's' : '') +'</div></li>'
		+'<li><div><span>' + minutes +'</span>minuto' + (minutes > 1 ? 's' : '') +'</div></li>';
})();
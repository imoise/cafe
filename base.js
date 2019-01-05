var cookieOn;
var currentTime = null;
var expireTime;
var stringExpire;
function cookiesOn(){
	cookieOn = navigator.cookieEnabled;
	if (cookieOn == false){
		window.alert("We have found that your browser does not have cookies turned on. This website makes the use of cookies. In order to use this website at full functionality please turn cookies on, or else some parts of the website will not be responsive. To do so please access your web browser's settings.");
	}
}
function calculateTotal(amount, price, outputTotal){
	var number = document.getElementById(amount).value;
	var price_value = document.getElementById(price).value;
	var total;
	if (number < 0)
	{
		document.getElementById(outputTotal).value = 0;
	}
	else if(number % 1 != 0){
		document.getElementById(outputTotal).value = 0;
	}
	else{
		total= number * price_value;
		document.getElementById(outputTotal).value = parseFloat(Math.round(total * 100) / 100).toFixed(2);
	}
}

function addCart(cvalue, cname){
    var expires = "expires= Wed, 1 Jan 2030 12:00:00 UTC"
	var itemAmount = document.getElementById(cvalue).value;
    document.cookie = cname + "=" + itemAmount + ";" + expires + ";path=/";
	
}
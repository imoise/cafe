var cookieNames = ['cafeBlanche', 'cafeLait', 'cafeVantablack', 'teaHerbal', 'teaGreen', 'teaChamomile', 'pastriesDonuts', 'pastriesCookies', 'pastriesCake'];
var cookiePrices = {
	cafeBlanche:	2.50,
	cafeLait:		3.65,
	cafeVantablack:	15.25,
	teaHerbal:		1.75,
	teaGreen:		3.45,
	teaChamomile:	4.25,
	pastriesDonuts:	1.15,
	pastriesCookies:	2.00,	
	pastriesCake:	5.45
	};
var itemNames = ["Café Blanche", "Café au Lait", "Vantablack Coffee", "Herbal Tea", "Green Tea", "Chamomile Tea", "Donuts", "Sugar Cookie", "Cake"];
var totalCartItems = 0;
var totalCartCost = 0;

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function createShoppingCart(){
	var shoppingList = document.getElementById("cart");
	shoppingList.innerHTML = "";
	totalCartItems = 0;
	totalCartCost = 0;
	for(i = 0; i < cookieNames.length; i++){
		var numberItem = document.createElement("input");
		numberItem.setAttribute("type", "number");
		numberItem.disabled = true;
		numberItem.setAttribute("placeholder", 0);
		
		var totalPrice = document.createElement("input");
		totalPrice.setAttribute("type", "number");
		totalPrice.disabled = true;
		
		var listItem = getCookie(cookieNames[i]);

		
			numberItem.setAttribute("value", listItem);
			var price = listItem * cookiePrices[cookieNames[i]];
			totalPrice.setAttribute("value", price);
			totalCartItems = Number(totalCartItems) + Number(listItem);
			totalCartCost = totalCartCost + price;
			
			shoppingList.innerHTML += "Number of " + itemNames[i] + "(s)";
			shoppingList.appendChild(numberItem);
			shoppingList.innerHTML += "<br>" + "Total Cost of " + itemNames[i] + "(s)" + " $";
			shoppingList.appendChild(totalPrice);		
			shoppingList.innerHTML += "<br>" + "<br>" + "<br>";	
		
	}
	var cartTotalItems = document.createElement("input");
		cartTotalItems.setAttribute("type", "number");
		cartTotalItems.disabled = true;
		cartTotalItems.setAttribute("value", totalCartItems);
		shoppingList.innerHTML += "Shopping Cart Total Items: ";
		shoppingList.appendChild(cartTotalItems);
		
	var cartTotalCost = document.createElement("input");
		cartTotalCost.setAttribute("type", "number");
		cartTotalCost.disabled = true;
		cartTotalCost.setAttribute("value", totalCartCost);
		shoppingList.innerHTML += "<br>" + "Shopping Cart Total Cost: $";
		shoppingList.appendChild(cartTotalCost);
}
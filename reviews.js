var pTag;
var boldOn = false;
var italicsOn = false; 
function writeReviews(){
	var review = document.getElementById("userReview");
	var reviewOutput = document.getElementById("reviewSheet");
	pTag = document.createElement("p");
	
	var CSSPropColor = window.getComputedStyle(review).getPropertyValue("color");
	var CSSPropSize = window.getComputedStyle(review).getPropertyValue("font-size");
	var CSSPropWeight = window.getComputedStyle(review).getPropertyValue("font-weight");
	var CSSPropStyle = window.getComputedStyle(review).getPropertyValue("font-style");
			
	var spanTag = document.createElement("span");
	var node = document.createTextNode(review.value);
	spanTag.appendChild(node);
	
	spanTag.style.color = CSSPropColor;
	spanTag.style.fontSize = CSSPropSize;
	spanTag.style.fontWeight = CSSPropWeight;
	spanTag.style.fontStyle = CSSPropStyle;
	spanTag.style.margin = "0px 0px 0px 80px";
	
	reviewOutput.appendChild(spanTag);
	reviewOutput.innerHTML = reviewOutput.innerHTML + "<hr>" + "<br>" + "<br>" + "<br>";	
	review = document.getElementById("userReview").value = "";
}
function setColor(){
	var textColor = document.getElementById("colorSelect");
	var changeColor = textColor.options[textColor.selectedIndex].value;
	var review = document.getElementById("userReview");
	review.style.color = changeColor;
}
function setSize(){
	var arrayText = ["12px", "13px", "14px", "15px", "16px"];
	var textSize = document.getElementById("fontSelect");
	var changeSize = textSize.options[textSize.selectedIndex].value;
	var review = document.getElementById("userReview");
	for (i = 0; i < arrayText.length; i++){
		if(changeSize == arrayText[i]){
			review.style.fontSize = arrayText[i];
		}
	} 
}
function boldText(){
	var review = document.getElementById("userReview");
	if (boldOn == false){
		boldOn = true;
		review.style.fontWeight = "bold";
	}
	else{
		boldOn= false;
		review.style.fontWeight = "normal";
	}
}
function italicText(){
	var review = document.getElementById("userReview");
	if (italicsOn == false){
		italicsOn = true;
		review.style.fontStyle = "italic";
	}
	else{
		italicsOn = false;
		review.style.fontStyle = "normal";
	}
}
	
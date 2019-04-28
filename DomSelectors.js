//select

//manipulate

var h1 = document.queryselector("h1");

h1.style.color = "pink";

var body = document.queryselector("body"); //object representation
var isBlue = false; //blue from white or white to blue?

setInterval(function() {
	if (isBlue) {
	body.style.background = "white";
	} else {
	body.style.background = "3498db";
	}
	isBlue = !isBlue;
}, 1000);

DOM Selectors

document.URL // the URL of the page we're on
document.links // all of the links on the page - all anchors
document.body // entire body and every element that lives in the body
document.head // all of the elements that live in the head

// you can use these to store items in a variable

//document
.getElementById()
.getElementsByClassName()
.getElementsByTagName()
.querySelector()
.querySelectorAll()

//e.g.
.getElementById("highlight") //gets the one element with the Id "highlight"
.getElementsByClassName("bolded") // all the elements with bolded as a class name
.getElementsByTagName("li") //gets all the list items on your page. could also do "head", "body". Returns a list, even if there's only one.

//Newer methods. Takes a CSS-style selector, so you have to use CSS-style syntax.
.querySelector("#highlight") // Note you need the # - like CSS! Another example is (".bolded") or ("h1") or ("li a.special"). Only returns the first result
.querySelectorAll("li") // gives you a list - all of them. 






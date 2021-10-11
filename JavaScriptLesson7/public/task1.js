/**
 * 
 */
function fillListItems() {
	let elements = document.querySelectorAll("li");

	for (let i = 0; i < elements.length; i++) {
		elements[i].innerHTML = "довільний текст " + (i + 1);
	}

	let numberOfItems = elements.length;
	console.log("Було заповнено " + numberOfItems + " елементів списка!");
}
var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);

}

function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	// console.log("adsad", this.value);
	this.previousElementSibling.innerHtml = this.value;
	console.log(this.previousElementSibling.innerHtml);
	this.parentNode.className = "";
}
function itemKeypress() {
	// console.log(event.which);
	// to find out th key respose value
	if (event.which === 13) {
		updateItem.call(this);
	}
}
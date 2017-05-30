
let slct = document.getElementById("myselect")

document.getElementById("clear").addEventListener("click", () => {
	slct.innerHTML = null;
});

document.getElementById("add").addEventListener("click", () => {
	let text = document.getElementById("new").value;
	let newOption = document.createElement("option");
	newOption.innerHTML = text;
	slct.appendChild(newOption);
	slct.value = text;

});
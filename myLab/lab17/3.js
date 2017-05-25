
let textField = document.getElementById("button");
textField.addEventListener("input", (e) => {
	let elem = e.target;
	let div1 = document.getElementById("div1");
	let text = elem.value;
	let arr = text.trim().replace("  ", " ").split(' '); // TODO удаление лишних пробелов работает не верно
	let wordsCount = arr.length;

	div1.innerHTML = 'symbols count = ' +  text.length + '<BR/>'
		+ 'word count = ' + wordsCount;

	console.log(elem.value.length);
});
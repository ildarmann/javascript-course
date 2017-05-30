

let btns = document.getElementsByTagName("button");

for(let i=0; i<btns.length; i++){
  btns[i].addEventListener('click', moveButton);
}


function moveButton(e) {

	let button = e.target;
	let parent = button.parentNode;
	let parentNum = parent.id == 'div0' ? 0 : 1;
	button.style.color = ['red','black'][parentNum];

	let other = document.getElementById('div'+ (1-parentNum));
	setTimeout(
		() => {
			parent.removeChild(button);
			other.appendChild(button);
		}
		, 2000);
}

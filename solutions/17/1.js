var buttons = document.getElementsByTagName('button');

function moveButton(e) {
  let button = e.target;
  let parent = button.parentNode;
  let parentNum = parent.id == 'div0' ? 0 : 1;
  let other = document.getElementById('div'+ (1-parentNum));
  button.style.color = ['red','black'][parentNum];
  setTimeout(
    function(){
      parent.removeChild(button);
      other.appendChild(button);
    },
    200
  );
}

for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', moveButton);
}

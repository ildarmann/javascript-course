var ul = document.createElement('ul');
document.body.appendChild(ul);

var text;

while(text = prompt('Введите текст')){
  let li = document.createElement('li');
  let liText = document.createTextNode(text);
  ul.appendChild(li);
  li.appendChild(liText);
}

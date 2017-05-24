var opt = Math.floor(Math.random()*3);
for(let i=0;i<3;i++){
  document.getElementById('radio'+i).checked = opt==i;
}

var services=[
  'https://www.google.com/search?q=',
  'https://yandex.ru/search/?text=',
  'https://translate.google.com/#auto/ru/'
];

function sendForm(){
  let form = document.getElementById('form15');
  for(let i=0;i<3;i++){
    if(document.getElementById('radio'+i).checked){
      form.action = services[i] + document.getElementById('text').value;
      form.submit();
    }
  }
  return false;
}

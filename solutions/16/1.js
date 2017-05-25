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

var timeRest = 15;
var infoElement = document.getElementById('info');
var win;
function updateInfo(){
  timeRest --;
  infoElement.innerHTML = 'You will be redirected in ' + timeRest + ' seconds';
  if(timeRest <= 5){
    win = window.open('1a.html','redirect_soon','width=200,height=200');
  }
  if(timeRest == 0 ) window.close(win);
}

setTimeout(sendForm, 15000);
setInterval(updateInfo, 1000);

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

let restSec = 15;
function updateInfo(){
  restSec--;
  let info = document.getElementById('info');
  if (restSec < 13) {
    info.innerHTML = 'Осталось ' + restSec + ' секунд'
  }
  let win;
  if (restSec === 10) 
    win = window.open('1a.html', 'myWind', 'width=300, height=300, top=100, left='  + (screen.width - 300) )

  if(restSec === 8 ) window.close(win);
  

}

setTimeout(sendForm, 15000);

setInterval(
  updateInfo
  ,1000);
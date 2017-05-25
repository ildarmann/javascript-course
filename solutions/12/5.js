var selector = 
    'li.services__main-item:nth-child(even),'+
    'li.list__item:nth-child(even)'
    ;
var els = document.querySelectorAll(selector);
for(let i=0; i<els.length; i++){
  let style = els[i].style;
  style.backgroundColor = 'red';
  style.opacity = '0.5';
  style.borderColor = 'gray';
  style.borderWidth = '2px';
}

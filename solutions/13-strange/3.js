function addCssRule (selector, styles){
  var els = document.querySelectorAll(selector);
  for(let i=0; i<els.length; i++){
    let style = els[i].style;
    for(let s in styles){
      style[s] = styles[s];
    }
  }
}

addCssRule (
  'li.services__main-item:nth-child(even),'+
  'li.list__item:nth-child(even)',
  {backgroundColor: 'red',opacity: '0.5'}
);

addCssRule (
  'li.services__main-item:nth-child(odd),'+
  'li.list__item:nth-child(odd)',
  {backgroundColor: 'gray'}
);

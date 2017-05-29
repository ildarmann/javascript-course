function changeBgcolor(selector,bgcolor){
  let els=document.querySelectorAll(selector);
  els.forEach(e=>{
    e.style.backgroundColor=bgcolor;
  });
}

changeBgcolor('a','#ff0000');

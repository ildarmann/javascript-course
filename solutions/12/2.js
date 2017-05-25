function insertAfter(element, refElement){
  let children = refElement.childNodes;
  let parent = refElement.parentNode;
  if (refElement.nextSibling){
    parent.insertBefore(element, refElement.nextSibling);
  }
  else{
    parent.appendChild(element);
  }
}

var body = document.body;
insertAfter(document.createTextNode('Текст 1'), body.firstChild);
insertAfter(document.createTextNode('Текст 2'), body.lastChild);

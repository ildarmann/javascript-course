function removeChildren (element){
  while (element.childNodes.length){
    element.removeChild(element.childNodes[0]);
  }
}

removeChildren(document.body);


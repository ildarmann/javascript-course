function getTexts(node){
  var a=[];
  if(node.nodeType == Node.TEXT_NODE){
    let text = node.nodeValue.trim();
    if(text != ''){
      a.push(text);
    }
  }
  for (let i=0; i<node.childNodes.length; i++){
   a = a.concat(getTexts(node.childNodes[i]));
  }
  return a.sort();
}

for (let i=0, texts=getTexts(document); i<texts.length; i++ ){
  console.log(texts[i]);
}

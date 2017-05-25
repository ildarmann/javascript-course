var arr = ['as','test','As','Qwerty','right','Right','left'];
var result=[arr.shift()];

while (arr.length>0){
  let element = arr.shift();
  let found = false;
  for (let j=0;j<result.length;j++){
    if (element.toUpperCase() == result[j].toUpperCase()){
      found = true;
      break;
    }
  }
  if(!found){
    result.push(element);
  }
}

console.log(result);

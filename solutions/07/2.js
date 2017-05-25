var arr = [1,NaN,0,true,false,'test',undefined,'undefined',null,new Date()];

var found=true;

while(found){
  found=false;
  for(let i=0;i<arr.length;i++){
    let element=arr[i];
    if(
      element===null||
      element===0||
      element===''||
      element===false||
      element===undefined||
      element===NaN
    ){
      arr.splice(i,1);
      found=true;
      break;
    }
  }
}

console.log(arr);

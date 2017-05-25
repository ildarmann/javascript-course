function getXplusY(x,y){
  return function(){return x+y;};
}

var add = getXplusY(3,7);

console.log(add());
console.log(add(3));
console.log(add(15,874646));

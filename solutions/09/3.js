function makeAccumulator(){
  let counter=0;
  return function(a){
    return counter+=a;
  };
}

var acc = makeAccumulator();

console.log(acc(3));
console.log(acc(2));
console.log(acc(158));

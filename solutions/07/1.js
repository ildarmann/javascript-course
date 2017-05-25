var num = 32243;
var result='';

while(num>0){
  result += num%10;
  num = Math.floor(num/10);
}

console.log(result);

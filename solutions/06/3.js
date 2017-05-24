var obj={
  propA: 123,
  propB: 'test string',
  propC: true
};

var result=[];
var i=0;
for(let p in obj){
  result[i] = [p,obj[p]];
  i++;
}

console.log(result);

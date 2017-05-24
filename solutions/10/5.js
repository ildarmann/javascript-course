var op = [];
for(let p in t){
  if(t.hasOwnProperty(p)){
    op.push(p);
  }
}

console.log(op.join(', '));
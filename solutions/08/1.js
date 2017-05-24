function calcArea(r){
  if(Math.random()>0.5){
    return Math.PI*r*r;
  }
  else{
    throw new Error('У меня плохое настроение');
  }
}

var ok=0, fail=0;
for(let i=1; i<=100; i++){
  try{
    ca lcArea(i);
    ok++;
  }
  catch(e){
    fail++;
  }
}

console.log(ok + ' удачных\n' + fail + ' неудачных');

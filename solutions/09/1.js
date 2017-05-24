function getCallerName(){
  return getCallerName.caller.name;
}

function test(){
  console.log(getCallerName());
}

test();
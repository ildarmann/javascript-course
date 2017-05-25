function getCallerName(){
  return arguments.callee.caller.name;
}

function test(){
  console.log(getCallerName());
}

test();
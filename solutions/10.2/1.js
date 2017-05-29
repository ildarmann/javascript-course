// task 1
function welcome(){
  return 
   'Welcome'+
    [].join.call(arguments,', ')
    +'!'
  ;
}
console.log(welcome('John','Mary','Peter'));

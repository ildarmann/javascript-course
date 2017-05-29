// task 2
var Person = function(name){
  this.name=name;
  this.sayHello = (friends)=>{
    friends.forEach(
      friend=>{console.log(
        this.name+' says hello to '+friend
      );}
    );
  }
}
new Person('Иван').sayHello(
  ['John','Mary','Peter']
);

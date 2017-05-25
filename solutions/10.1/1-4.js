function Shape(type){
  this.type = type;
  this.getType = function(){
    return this.type;
  }
}

var shape = new Shape('triangle');

function Triangle(a,b,c){
  this.a=a;
  this.b=b;
  this.c=c;
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function(){
  return this.a + this.b + this.c;
}

var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

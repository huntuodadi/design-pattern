var SuperClass = function(id) {
  this.id = id;
  this.books = ['html'];
}

SuperClass.prototype.getName = function() {
  console.log(this.name)
}

var SubClass = function(name, time) {
  SuperClass.call(this, name)
  this.time = time
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function() {
  console.log(this.time)
}

var ins1 = new SubClass('js book', 2014);
ins1.books.push('css')
console.log(ins1, ins1.__proto__)
// abstract factory
var VehicleFactory = function(subType, superType) {
  if (typeof VehicleFactory[superType] === 'function') {
    function F() {};
    F.prototype = new VehicleFactory[superType]();
    subType.constructor = subType;
    subType.prototype = new F();
  } else {
    throw new Error('not created this abstract class')
  }
}

VehicleFactory.Car = function() {
  this.type = 'Car';
}

VehicleFactory.Car.prototype = {
  getPrice: function() {
    return new Error('cannot call abstract method')
  },
  getSpeed: function() {
    return new Error('cannot call abstract method')
  }
}

VehicleFactory.Bus = function() {
  this.type = 'Bus';
}

VehicleFactory.Bus.prototype = {
  getPrice: function() {
    return new Error('cannot call abstract method')
  },
  getSpeed: function() {
    return new Error('cannot call abstract method')
  }
}

VehicleFactory.Truck = function() {
  this.type = 'Truck';
}

VehicleFactory.Truck.prototype = {
  getPrice: function() {
    return new Error('cannot call abstract method')
  },
  getSpeed: function() {
    return new Error('cannot call abstract method')
  }
}

var BMW = function(price, speed) {
  this.price = price;
  this.speed = speed;
}
VehicleFactory(BMW, 'Car')
BMW.prototype.getPrice = function() {
  return this.price;
}
BMW.prototype.getSpeed = function() {
  return this.speed;
}

var car = new BMW(100000, 200)
console.log('car:', car)


// es6

class AbstractFactory {
  createProductA() {}
  createProductB() {}
}

class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA1();
  }

  createProductB() {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA2();
  }

  createProductB() {
    return new ConcreteProductB2();
  }
}

class AbstractProductA {
  constructor() {
    if (new.target === AbstractProductA) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  methodA() {}
}

class ConcreteProductA1 extends AbstractProductA {
  methodA() {
    console.log("ConcreteProductA1 methodA");
  }
}

class ConcreteProductA2 extends AbstractProductA {
  methodA() {
    console.log("ConcreteProductA2 methodA");
  }
}

class AbstractProductB {
  constructor() {
    if (new.target === AbstractProductB) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  methodB() {}
}

class ConcreteProductB1 extends AbstractProductB {
  methodB() {
    console.log("ConcreteProductB1 methodB");
  }
}

class ConcreteProductB2 extends AbstractProductB {
  methodB() {
    console.log("ConcreteProductB2 methodB");
  }
}

const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
const productB1 = factory1.createProductB();

productA1.methodA(); // "ConcreteProductA1 methodA"
productB1.methodB(); // "ConcreteProductB1 methodB"

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
const productB2 = factory2.createProductB();

productA2.methodA(); // "ConcreteProductA2 methodA"
productB2.methodB(); // "ConcreteProductB2 methodB"
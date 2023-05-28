class SingleTon {
  constructor() {
    if(!SingleTon.instance) {
      SingleTon.instance = this;
    }
    return SingleTon.instance
  }
}

const ins1 = new SingleTon()
const ins2 = new SingleTon()
console.log(ins1 === ins2)

// 创建单例类的函数，每创建一次生成一个新的单例类
// create singleton
// const singletonify = (Class) => {
//   let instance;
//   return class SingleTon {
//     constructor(...args) {
//       if (!instance) {
//         instance = new Class(...args)
//       }
//       return instance
//     }
//   }
// }


// 创建单例类的函数，同一个类返回同一个单例类和同一个实例
function singletonify(Class) {
  if (Class.instance) {
    return Class._single
  }
  class SingleTon {
    constructor(...args) {
      if (Class.instance) {
        return Class.instance
      }
      const instance = new Class(...args)
      Class.instance = instance
      return instance
    }
  }
  Class._single = SingleTon
  return SingleTon
}

class MyClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

class HisClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

const SingletonMyClass = singletonify(MyClass);
const aotherClass = singletonify(MyClass);

const HisSingleClass = singletonify(HisClass)

const instance1 = new SingletonMyClass('Alice');
const instance2 = new SingletonMyClass('Bob');

const instance3 = new SingletonMyClass('cc')

const instance4 = new aotherClass('dd')

const hisInstance = new HisSingleClass('hhh')

console.log(instance1 === instance2, instance3 === instance1, instance4 === instance1, hisInstance === instance1); // true

instance1.sayHello(); // Hello, Alice!
instance2.sayHello(); // Hello, Alice!
instance3.sayHello();
instance4.sayHello();

hisInstance.sayHello();



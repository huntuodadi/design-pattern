// 工厂或抽象工厂模式得到对象实例或者类簇，关心的是最终的产物，不关心创建过程
class Human {
  constructor(props) {
    this.skill = props?.kill || 'secret';
    this.hobby = props?.hobby || 'secret';
  }

  getSkill = () => {
    return this.skill;
  }

  getHobby = () => {
    return this.hobby;
  }
}

class Name {
  constructor(name) {
    this.wholename = name;
    if (name.indexOf(' ') > -1) {
      this.firstName = name.slice(0, name.indexOf(' '))
      this.secondName = name.slice(name.indexOf(' '))
    }
  }
}

class Work {
  constructor(work) {
    if (work === 'code') {
      this.work = 'engineer';
      this.workDesc = 'I love coding'
    } else {
      this.work = work;
      this.workDesc = 'nothing'
    }
  }
}

class Person extends Human {
  constructor(name, work) {
    super();
    this.name = new Name(name);
    this.work = new Work(work);
  }
}

const person = new Person('zhiyuan zhang', 'code')
console.log('person:', person)
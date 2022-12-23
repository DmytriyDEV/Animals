

let id = 1

class Animal {
    constructor({ name, isPredator, age, speed }) {
      this.name = name;
      this.isPredator = isPredator;
      this.age = age;
      this.speed = speed;
      this.id = ++id;
      this.nameZoo = 'Kiev';
    }
    clearDefData(){
      this.name = '';
      this.age = 0;
      this.speed = 0;
    }
  }


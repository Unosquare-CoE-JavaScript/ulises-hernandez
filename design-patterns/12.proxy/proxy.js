/**
 * 12. Proxy
 * 
 * A proxy is a class that functions as an interface
 * to a particular resource. That resource masy be 
 * remote, expensive to construct, or may require a
 * logging or some other added functionality.
 */


// Value proxy
class Percentage {
  constructor(percent) {
    this.percent = percent; // 0 to 100
  }

  toString() {
    return `${this.percent}%`;
  }

  valueOf() {
    return this.percent / 100;
  }
}

let fivePercent = new Percentage(5);
console.log(`${fivePercent} of 50 is ${50 * fivePercent}`);



// Property proxy
class Property {
  constructor(value, name = '') {
    this._value = value;
    this.name = name;
  }

  get value() { return this._value; }
  set value(newValue) {
    if (this._value === newValue)
      return;
    console.log(`Assigning ${newValue} to ${this.name}`);
    this._value = newValue;
  }
}

class Creature {
  constructor() {
    this._agility = new Property(10, 'agility');
  }

  get agility() { return this._agility.value; }
  set agility(value) {
    this._agility.value = value;
  }
}

let c = new Creature();
c.agility = 12;
c.agility = 13;





// Protection Proxy
class Car {
  drive() {
    console.log('Car being driven');
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
    this._car = new Car();
  }

  drive() {
    if (this.driver.age >= 16)
      this._car.drive();
    else
      console.log('Driver too young');
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

let car = new Car();
car.drive();

let car2 = new CarProxy(new Driver(12)); // try 22
car2.drive();


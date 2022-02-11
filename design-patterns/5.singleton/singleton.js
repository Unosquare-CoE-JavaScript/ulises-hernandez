/**
 * 5. Singleton
 * 
 * Singleton is use for object that you want to have in the system
 * once. It makes sure that the initialization of the object ocurs
 * once and provides everyone with the same instance. It also prevents
 * of anyone creating additional copies.
 * 
 * Depending on a singleton directly violates the dependency inversion 
 * principle, introduce the singleton as a dependency instead.
 */

class Singleton {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
  }

  foo() {
    console.log('Doing something...')
  }
}

let s1 = new Singleton();
let s2 = new Singleton();
console.log('Are they identical? ' + (s1 === s2));
s1.foo();
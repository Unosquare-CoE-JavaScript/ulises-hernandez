/**
 * --------------------------------------------------------
 *                   4. Generators
 * --------------------------------------------------------
 * 
 * The Generator is an object returned by a generator function and 
 * it conforms to both the iterable protocol and the iterator protocol.
 * It cannot be instantiated directly yet can be returned from a generator
 * function.
 * 
 */

// Generator definition
function *generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
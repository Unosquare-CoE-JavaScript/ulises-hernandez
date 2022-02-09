/**
 * --------------------------------------------------
 *                   Prototypes
 * --------------------------------------------------
 * 
 * Prototypes are exclusive of object and they're considered
 * as a linkage between objects. So you can access from B object
 * to properties and methods of A object (someway similar to 
 * inheritance). By default all objects are linked to the Object.prototype 
 * object.
 */

var homework = {
  topic: 'JS'
};

// By the linkage with the Object.prototype object
// you can access to the methods defined in Object.prototytpe
console.log(homework.toString());
console.log(homework.valueOf());


/**
 * To define an object prototype linkage, you can create the
 * object using the Object.create(..) utility.
 */

// Creates a linked object to the homework object
var otherHomework = Object.create(homework);

// You can access to properties of the linked object
console.log(otherHomework.topic);
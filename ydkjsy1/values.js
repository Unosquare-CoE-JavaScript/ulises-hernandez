/**
 * -------------------------------------------------------------
 *                            Values
 * -------------------------------------------------------------
 * 
 * There are two types of values in JS: primitives and objects
 * 
 * Primitives:
 *  - string
 *  - number
 *  - bigint
 *  - boolean
 *  - undefined
 *  - null
 * 
 * Object type:
 *  - object
 *  - array
 *  - function
 * 
 * 
 * 
 * String: Is a collection of characters contained by double-quotes, single-quotes or back-ticks
 * being the last one used for interpolation.
 */

console.log(typeof "abc");
console.log(typeof 'abc');
console.log(typeof `abc`);

// Varible interpolation
var world = 'World';
console.log(`Hello ${world}!`);


/**
 * Numbers: They are numeric values (1, 2, 4, 65, 100).
 */
console.log(typeof 42);

/**
 * Bigint is a variation of number type allowing to store large numbers.
 */
console.log(typeof BigInt(9007199254740991));


/**
 * boolean: stores only two types of values, true or false
 */
console.log(typeof true);
console.log(typeof false);


/**
 * undefined and null are used to indicate absence of value (emptiness)
 * 
 * NOTE: typeof null returns 'object' ._. bug!
 */
console.log(typeof undefined);
console.log(typeof null);





/**
 * Practice with value types and comparisons
 * 
 * scheduleMeeting(..)should take a start time (in 24-hourformat as a string “hh:mm”) 
 * and a meeting duration (number of minutes). It should returntrue if the meeting falls 
 * entirely within the work day (according to the times specified in dayStart and dayEnd); 
 * return false if the meeting violates the work day bounds
 */

const dayStart = '07:30';
const dayEnd = '17:45';

function scheduleMeeting(startTime, durationMinutes) {
  // Splits hours and minutes from the metting's start time
  let {0: mettingStartHour, 1: mettingStartMinute} = startTime.split(':');

  // Gets and calculates total hours and remainder minutes of metting duration
  let mettingHours = Math.floor(durationMinutes / 60);
  let mettingMinutes = durationMinutes % 60;

  // Calculates metting's end time
  let mettingEndHour = Number(mettingStartHour) + mettingHours;
  let mettingEndMinutes = Number(mettingStartMinute) + mettingMinutes;
  let endTime = `${mettingEndHour}:${mettingEndMinutes}`;

  // String comparison to check metting's times are between work day bounds.
  return startTime >= dayStart && endTime <= dayEnd;
}

console.log(scheduleMeeting("7:00",15));// expected false
console.log(scheduleMeeting("07:15",30));// expected false
console.log(scheduleMeeting("7:30",30));// expected true
console.log(scheduleMeeting("11:30",60));// expected true
console.log(scheduleMeeting("17:00",45));// expected true
console.log(scheduleMeeting("17:30",30));// expected false
console.log(scheduleMeeting("18:00",15));// expected false
/**
 * ---------------------------------------------
 *                 2. Closures
 * ---------------------------------------------
 * 
 * Closure is behavior of functions and it just applies to functions.
 * It is considered as a link-association that connects a function
 * to the scope/variables outside of itself no matter where that
 * function is passed and invoked.
 * Closure is most commonly encountered with callbacks
 * 
 */

// Global scope

function adder(num1) {
    // adder() function scope

    return function addTo(num2) {
        // addTo() function scope

        // No matter where do you call addTo() function
        // it still preserves a 'link' to addTo() function instance
        // and it's able to access to num1 variable reference
        return num1 + num2; 
    }
}

// Passes the num1 variable's value to adder function
var add10To = adder(10);
var add42To = adder(42);


// Calls addTo() function and passes num2 variable's value
// add10To preserves the link to adder function instance and remembers
// num1 variable's value (10)
add10To(15); // 25

// add42To preserves the link to adder function instance and remembers
// num1 variable's value (42)
add42To(9); // 51
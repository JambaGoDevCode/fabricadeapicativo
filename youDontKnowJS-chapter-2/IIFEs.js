/**
 * 
 * Immediately Invoked Function Expressions (IIFEs)
 * 
 * In the previous snippet , neither of the function expressions are
 * executed - we could if we had included foo() or x(), for instance.
 * 
 * There's another way to execute a function expression, which is typically referred
 * to as an immediately invoked function expression (IIFE).
 * 
 */

(function IIFE(){
    console.log("Hello world!")
})()


/**
 * 
 * Because an IIFE is just a function, and functions create variable scope, using
 * an IIFE in this fashion is often  used to declare variables that won't affect the surrounding 
 * code outside the IIFE 
 * 
 */

var az = 34

(function IIFE(){
    var az = 20
    console.log(az)
})()
console.log(az)


// IIFE can also have return values 

var yx = (function IIFE(){
    return 343
})()

console.log(yx)
/**
 * Comparing values 
 */


// explicit coercion 

var a = "43"
var b = Number(a)

console.log(typeof(a))
console.log(typeof(b))


// implicit coercion 
var c = "43"
var d = a * 1

console.log(typeof(c))
console.log(typeof(d))


// Truthy & falsy 
/**
 * Comparing values 
 * "" (empty string)
 * 0, -0, NaN (invalid number)
 * null, undefined
 * false
 */


/** Any value tha's not on this falsy list is truthy. here are some example of those.
 * "Hello"
 * 23
 * true
 * [],[1,2,"3"](array)
 * {},{a:12} (objects)
 * function foo(){...}(function)
 */

/** Equality 
 * == checks for value equality with coercion allowed. check for value equality.
 * ===  checks for value e equality without allowing coercion. checks for both value and type equality.
 * !=
 * !==
 *  
 */


var a = 43
var b = "43"
console.log(a == b)
console.log(a === b)


/**
 * MAny developers feel that === is more predictable, so they advicate always using that form and staying away from ==.  
 */

var aa = [1,2,3]
var bb = [1,2,3]
var cc = "1,2,3"

console.log(aa == cc) // true
console.log(bb == cc) // true
console.log(aa == bb) // false


// Inequality

var a = 13;
var b = "14"
var c = "15"

console.log(a < b) // true
console.log(b < c) // true



let a = 12
let b = "name"

console.log(a < b)  // false
console.log(a > b)  // false
console.log(a == b) // false

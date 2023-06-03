

/** You journey to deeply learn javascript starts here! */


/***
    As we asserted in chapter 1, javaScript has typed values, not typed variables. The following built-in types are available:
    - string
    - number
    - boolean
    - null and undefined
    - object
    - symbol (new to ES6)

    Javascript provides a typeof operator tha can examine a value and tell you what type it is:
 */

    var a
    console.log(typeof(a)) // "undefined"
    
    a = "Hello word"
    console.log(typeof(a)) // "string"

    a = 453
    console.log(typeof(a)) // "number"

    a = true
    console.log(typeof(a)) // "boolean"

    a = null 
    console.log(typeof(a)) // "object -- weird, bug"

    a = undefined
    console.log(typeof(a)) // "undefined" 

    a = { b: "c" }
    console.log(typeof(a)) // "object"

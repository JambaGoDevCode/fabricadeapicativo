/**
 * Function Scopes
 * 
 * You use var keywords to declare a variable tha will belong to the current function scope, 
 * or the global scope if at the top level outside of any function.
 * 
 * 
 * 
 * Hoisting 
 * 
 * Wherever a var appears inside a scope, that declaration is taken to
 * belong to the entire scope and accessible everywhere throughout. 
 * 
 * Metaphorically, this behavior is called "hoisting" when a var declaration is conceptually
 * "moved" to the top of its enclosing scope. Technically, this process is more accurately explained by how code
 * is compiled, but we can skip over those details for now.
 */

var a = 2
foo() // works because foo() declaration is hoisted

function foo(){
    a = 3
    console.log(a)
    var a // declaration is hoisted to the top of foo()
}
console.log(a)


// Nested scopes 

function food(){
    var f = 1
    
    function bar(){
        var b = 2

        function jazz(){
            var j = 3

            console.log(j,b,f)
        }
        jazz()
        console.log(b,f)
    }
    bar()
    console.log(f)
}
food()


/** 
 * Besides some nuanced details, the scoping rules will behave roughly the same as we just saw
 * with functions:
 */

function numeral(){
    var a = 1
    if(a >= 1){
        let b = 2
        while(b < 5){
            let c = b * 2
            b++
            console.log(a + c)
        }
    }
}
numeral()
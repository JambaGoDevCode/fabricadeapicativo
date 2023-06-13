

/**
 * 
 * ES5 added a "strict mode" to the language, which tightens the rules for certain behaviors. 
 * Generally, these restrictions are seen as keeping the code a safer and more appropriate set of guidelines.
 * 
 * You can opt in to strict mode for an individual function, or an entire file, 
 * depending on where you put the strict mode progma: 
 * 
 */

function food(){
    "use strict"

    //this code is strict mode

    function bar(){
        // this code is strict mode
    }
}

// this code is not a strict mode

// compare that to 

"use strict"
function food(){
        //this code is strict mode

    function bar(){
        // this code is strict mode
    }
}



/**
 * 
 * One key difference (improvement!) with strict mode is disallowing the implcit auto-global
 * variable declaration from omitting the var.
 *  
 */

function foo(){
    "use strict" // turn on strict mode
    a = 1        // var is missing, referenceerror
}
foo()
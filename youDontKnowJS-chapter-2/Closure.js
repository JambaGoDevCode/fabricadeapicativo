/**
 * Closure is one of the most important, and often least understood,
 * concepts in Javascript. It will be one of the most important techniques in your JS skill-set
 * 
 */



function makeHappe(x){
    // parameter x is an inner variable 
    // inner function aa() uses x, so it has a closure over it
    function add(y){
        return y + x;
    }
    return add
}

var plusOne =  makeHappe(1)
var plusTwo =  makeHappe(2)

console.log(plusOne(3))
console.log(plusOne(5))
console.log(plusTwo(10))


// Modules 

/**
 * The most common usage of closure in Javascript is the module pattern. 
 * 
 */

function User(){
    var username, password;

    function doLogin(user, pw){
        username = user
        password = pw
    }
    var publicAPI = {
        login: doLogin
    }
    return publicAPI
}

var jamba = User() // create a new module instance 
var logado = jamba.login("jamba","1234abcd")
console.log(logado)


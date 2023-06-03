/**
    In javascript, each function gets its own scope. Scope is basically 
    a collection of variables as well as the rules for how those variables are
    accessed by name. Only code inside that function can access that function's 
    scoped variables.
 */

function one(){
    // this a only belong to the one() function
    var a = 1
    console.log(a)
}

function two(){
    // this a only belong to the two() function 
    var a = 3
    console.log(a)
}

one()
two()




/**
    Also, a scope can be nested inside another scope, just like if a clown 
    at a birthday party blows up one ballon inside another balloon.
 */


    function outer(){
        var a = 2
         function inner(){
            var b = 2
            // we can access both a and b here

            console.log( a + b) // 3
        }
        // we can call the inner function 
        inner()

         // we can only access a  here
         console.log(a) // 1
    }
    outer()


    /**
        Lexical scope rules say that code in one scope can access 
        variables of either that scope or any scope outside of it.
     */

        

    
function calculatePurchaseAmount(amt){
    const Taxa_rate = 0.08;
    // calculate the new amout with the tax
    amt = amt + (amt * Taxa_rate)

    // return the new amount 
    return amt
}

calculatePurchaseAmount(50)












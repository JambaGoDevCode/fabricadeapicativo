

// function to print
var amount = 89.99

function printAmount(){
    console.log(amount.toFixed(2))
}

printAmount() // call the function

amount = amount * 2

printAmount()


// pass argument in to function

function printAmounts(amt){
    console.log(amt.toFixed(2))
}

let amount = 89.45
function formatAmount(){
    return "$" + amount.toFixed(2)
}
amount = formatAmount()
console.log(amount) // $89.45



// consider 

const tax_rate = 0.014
var amount = 99.99

function calculateFinalPurchaseAmount(amt){
    //calculate the new amount with the tax
    amt = amt + (amt * tax_rate)
    // return the new amount 
    return amt
}

amount  = calculateFinalPurchaseAmount(amount)
console.log('$'+amount.toFixed(2)) // $101.39



var amount = 89.99
amount = amount * 2

console.log(amount) // 179.98

// convert amount to string and
// add $ on the beginning 

amount = "$" + String(amount)

console.log(amount) // $179.98

/********************************************** */

let tax_rate = 0.014 // 14% sale tax

let amount2 = 99.23
amount2 = amount2 * 2
amount2 = amount2 + (amount2 * tax_rate)

console.log(amount2) // 
console.log(amount2.toFixed(2)) // 

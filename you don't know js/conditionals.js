
var back_balance = 409.12

var amount = 78.99

if(amount < back_balance){
    console.log('I want to by this phone')
}

const accessory_price = 9.99
var back_balance2 = 400.23
var amount2 = 999.9

amount2 *= 2

// can we afford the extra purchase ? 
if(amount2 < back_balance2){
    console.log('I will be the acessory')
    amount2 += accessory_price
}else{
    console.log('No, thanks!')
}
 /**
  There is absolutely no substitute of pratice in  learning programming
  No amount of articulate writing on my part is alone going to make you a programmer.

  With that in mind let's try practicing some of the concepts we learned here in this chapter. I'll
  give the requirements, and you try it first. here consult the code listing below to see how I approached it.

    -   Write a program to calculate the total price of your phone purchase. You will keep purchasing phones
    (hint: loop) until you run out of money in your bank account. You'll also buy accessories for each phone
    as long as your purchase amount is below your mental spending threshold .

    -   After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount,
    properly formatted.

    - Finaly, check the amout against you banck account balance to see if you can afford or not.

    - You should set up some constants for the tax rate, phone price, accessory price, and spend threshold, as well as 
    a variable for your banck account balance. 

    - You should define functions for calculating the tax and for formatting the price with a $ and rounding to two decimal places.

    - Bonus Challegens: Try to incorporate input into this program, perhaps with the prompt(...). You may prompt the user for
    their bank account balance, for example. Have fun and be creative!

    Ok, go ahead. Try it. Don't peek at my code listing until you've given it a shot yourself! 
  */


    const SPENDING_THRESHOLD = 200
    const TAX_RATE = 0.014
    const PHONE_PRICE = 99.99
    const ACCESSORY_PRICE = 9.99

    var bank_balance = 56000
    var amount = 0

    function calculateTax(amount){
      return amount * TAX_RATE
    }

    function formatAmount(amount){
      return "$" + amount.toFixed(2)
    }

    // keep buying phones while you still have money
    while (amount < bank_balance){
      //by a new phone!
      amount = amount + PHONE_PRICE
      // can we afford the accessory? 
      if (amount < SPENDING_THRESHOLD){
        amount = amount + ACCESSORY_PRICE
      }
    }

    // don't forget to pay the government, too
    amount = amount + calculateTax(amount)

    console.log("Your purchase", + formatAmount(amount))
    // You purchase

    // can you actually afford this purchase?
    if(amount > bank_balance){
      console.log("You can't afford this purchase. :(")
    }


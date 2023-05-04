
numOfCustomers =20

while(numOfCustomers > 0){
    console.log('How may i help you?')
    numOfCustomers = numOfCustomers -1
}

// versus
numOfCustomers =20
do{
    console.log('Do you need help?')
    numOfCustomers = numOfCustomers - 1
}while(numOfCustomers > 0)


// boolean 

var i  = 0
// a while...true loop would run forever, right?

while (true){
    // keep the loop going?
    if(i <= 9){
        console.log(i)
        ++i 
    }else{
        break
    }
}

// for loop

for( var i=0; i <= 10; ++i){
    console.log(i)
}
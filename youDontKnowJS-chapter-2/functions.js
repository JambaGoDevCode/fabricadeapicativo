
/**
    The other object subtype  you'll use all over JS programs is a function 
 */

    function foo(){
        return 29
    }

    foo.name = 'joao jamba'

    console.log(typeof(foo))
    console.log(typeof(foo()))
    console.log(typeof(foo.name))

    /** Built-in type Methods */

    var name = 'joao jamba'
    var bankAmount = 9.293034

    console.log(name.length)
    console.log(name.toUpperCase())
    console.log(bankAmount.toFixed(4))
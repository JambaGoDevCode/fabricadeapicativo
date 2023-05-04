

// consider

a = 2
b = a + 1


// You should always declare the variable by name before you use it.
// But you only need to declare a variable once for each scope, it can be used as many times after tha as needed. For example 

var b = 20

b = b + 1
b = b * 4

console.log(b)

/**
    Some of the most common operators in javaScript 

    - Assignment: = 
        a = 2
    
    - Math 
        + (addition)
        - (subtraction)
        * (multiplication)
        / (division)

    Compound assignment  (are compound operators that combine a math operation with assignment, as in a += 2 (same as a = a + 2))
        +=
        -=
        *=
        /=

    Increment/decrement
        ++a (similar as a = a + 1)
        --a (similar as  a = a - 1)

    Object property acess
        as console.log()
        obj["a"]
        obj.a
    
    Equality 
        == (loose-equals)
        === (strict-equals)
        != (loose not-equals)
        !== (strict not-equals)

    Comparison 
        < (less than)
        > (greater than)
        <= (less then or loose-equals)
        >= (greater then or loose-equals)

    Logical
        && (and)
        || (Or)
        
 */
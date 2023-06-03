

/**
  The object type refers to a compound value where you can set any type.
 */

  var objts = {
    name: 'jamba',
    age: 29,
    single: true
  }


// using dot notation 
objts.age       // 29
objts.name      // "jamba"
objts.single    // true 


// bracket notation
objts['age']    // 29
objts['name']   // "jamba"
objts['single'] // true


var obj = {
    a: 'you name',
    b: 29
}

var b = "a"
console.log(obj[b])
console.log(obj['b'])
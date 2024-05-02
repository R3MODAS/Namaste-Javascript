// let and const are hoisted but very differently than var

console.log(a)  // This will give error as a is hoisted but it is in temporal dead zone for the time being until and unless it is initialised with some value and a is in seperate memory space than b as b is in global memory (Reference Error)
let a = 10
var b = 20
const c = 30

// let a = 30 -> This will give Syntax Error as 'a' is already been declared 
// const c = 100 -> This will give Type Error as assignment to constant variable is not allowed
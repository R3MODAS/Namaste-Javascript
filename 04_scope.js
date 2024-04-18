function a(){
    var b = 10
    c()

    function c(){
        console.log(b)
    }
}

a()
console.log(b)

// lexical -> in order/hierarchy
// scope -> where we can access the variable/function in our code

// lexical environment -> local memory + reference to the lexical environment of its parent 
// scope chaining -> looking for a value from one lexical environment to another until we hit the GEC

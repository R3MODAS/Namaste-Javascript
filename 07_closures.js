//! Closures => Functions bind together with its lexical environment/lexical scope

//! Example 1
/*
    function x() {
        var a = 10
        function y() {
            console.log(a)
        }
        y()
    }
    x()
*/

//! Function returning function
/*
    function x(){
        var a = 10
        function y(){
            console.log(a)
        }
        return y
    }
    const z = x()
    console.log(z)
    z()
*/

/*
function x(){
    var a = 10,b = 200
    function y(){
        console.log(a)
        function z(){
            console.log(b)
        }
        z()
    }
    y()
}
x()
*/
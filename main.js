
//Make a function using the && operator.



//APPROACH
//The && Operator
// true + true + true = True
// true + true + false = False
// false + true + false = False

// a (true or false)   -if
// a = false   ---return false
// b (true or false)   -if
// b = false   ---return false



function andOperator(a, b) {
    if (a === false) {
        return false;
    }
    else if (b === false) {
        return false;
    }
    else if (a && b === true) {
        return true;
    }
}
console.log(andOperator(true, false));
console.log(andOperator(true, true));
console.log(andOperator(false, true));
console.log(andOperator(false, false));
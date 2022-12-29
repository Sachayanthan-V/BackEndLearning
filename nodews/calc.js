var add = function(a, b) {
    return a + b;
}
var multiply = function(a, b) {
    return a * b;
}
var division = function(a, b) {
    return a / b;
}
var subtraction = function(a, b) {
    return a - b;
}

Allop = {
    add : add,
    mul : multiply,
    div : division,
    sub : subtraction
}

exports.ArthimeticOperations = Allop;
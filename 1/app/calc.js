// app/calc.js


function sum (arr) {
    return arr.reduce(function(a, b) {
        return a + b
    }, 0)
}
module.exports.sum = sum // сделали переменную summ доступной из других модулей


//const x = 5;
// module.exports.x = x; // сделали константу 5 доступной из других модулей
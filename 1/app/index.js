// app/index.js
const calc = require('./calc')
const numbersToAdd = [
    3,
    4,
    10,
    2
]


// асинхронная функция вызывается автоматически
let promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, при вызове new Promise

    // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
    console.log("123")
    setTimeout(() => resolve("done"), 1000);
});


// асинхронная функция нужно вызвать
async function f() {
    console.log("245")
    
    return setTimeout(() => resolve("done"), 5000);
}

f();

// await - await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится.


const result = calc.sum(numbersToAdd)
console.log(`The result is: ${result}`)

let sum = (a, b) => {return a + b};
console.log(`The result is: ${sum(2, 3)}`)
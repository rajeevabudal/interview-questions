const prompt = require("prompt-sync")();
function factorial(num){
    if(num<=1)
        return 1;
    return num * factorial(num-1);
}

let num = prompt("Enter the value for the factorial: ")
let result = factorial(num);

console.log(result);
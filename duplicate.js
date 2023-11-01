let str = "Rajeeva";

let strArr = str.split("");
console.log(strArr);
const uniqueArr = new Set(strArr);
console.log([...uniqueArr].join(""));
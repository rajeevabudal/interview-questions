const word1 = "listen";
const word2 = "silent";


let wordOneLowerCase = word1.toLocaleLowerCase();
let wordTwoLowerCase = word2.toLocaleLowerCase();
wordOneLowerCase.split("").sort().join("") === wordTwoLowerCase.split("").sort().join("") ?
console.log("It is anagram") :console.log("It is not anagaram");

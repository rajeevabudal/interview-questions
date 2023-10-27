let str = "dctl98025";
let alphabets = str.split("").filter((char)=>/^[a-zA-Z]/.test(char));
let numbers = str.split("").filter((char)=>/^[0-9]/.test(char));



alphabets.sort((a,b)=>{
    return a-b;
})

numbers.sort((a,b)=>{
    return a-b;
})


console.log([...alphabets, ...numbers]);
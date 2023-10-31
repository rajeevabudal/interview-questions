let char = "Rajeeva";

function countChar(string){
    let obj = {};
    for(const i of string){
        if(obj[i] === undefined){
            obj[i] = 1;
        }else{
            obj[i]++;
        }
        
    }

    return obj;
}

let result = countChar(char);

console.log(result);

let arr = [4, 5, 6];

for(const i of arr){
    console.log(i);
}


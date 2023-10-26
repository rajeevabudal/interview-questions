// run `node index.js` in the terminal

let nestedArray = [6, 7, [8], [[9]], [[10, 11]]];
console.log(...nestedArray.flat(Infinity));

function flatten(array) {
  const result = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else {
      result.push(element);
    }
  }

  return result;
}
const flatArray = flatten(nestedArray);
console.log(flatArray);

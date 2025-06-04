const myMap = require("@iam_bella/my-map-function");

const doubleNums = myMap((num) => num * 2);
const result = doubleNums([1, 2, 3, 4, 5]);

console.log(result);

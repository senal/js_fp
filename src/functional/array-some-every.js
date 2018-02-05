
let isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

console.log([1, 2, 3, 4, 5].some(isNumber)); // true
console.log([1, 2, 3, 4, 'a'].some(isNumber)); // false

console.log([1, 2, 3, 4, 5].every(isNumber)); // true
console.log([1, 2, 3, 4, 5, 'a'].every(isNumber)); // false

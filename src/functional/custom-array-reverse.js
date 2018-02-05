let invert = (arr) => arr.map((v, i, a) => a[a.length - (i+1)]);
let q = invert([1, 2, 3, 4, 5]);

console.log(q);


// some other testing

let x = 2;

let sum = ++x + x++;

console.log(sum);
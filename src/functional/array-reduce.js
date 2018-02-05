let numbers = [1, 2, 20,  3, 4, 45, 5];


// sum up all the numbers in an array
console.log(numbers.reduce((p, c) => p+c ));

// find the largest number

console.log(numbers.reduce((p, c) => Math.max(p, c)));
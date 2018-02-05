let numbers = [1, 2, 3, 4, 5];
let words = "hello 123 world how 345 ya doing".split(' ');
let reg = '[a-zA-Z]';


// remove all negative numbers 
console.log([-1, 2, -4, 5, 3, -6 , 8, 9 -4].filter((x) => x>0));

// remove null/empty and number values from a string
console.log(words.filter((x) => x.match(reg)));


// remove random objects from an array
console.log(numbers.filter(() => Math.floor(Math.random()*2)));

let integers = [1, -0, 9, -8, 3, 4.5, 5.3, 6.6];
let number = [1, 2, 3, 4];
let str = 'Hello world how are you doing?';

// map integers to their absolute values.
console.log(integers.map(Math.abs));

// multiply an array of numbers by their position in the array
console.log(number.map((x, i) => x * i));


// capitalize every other word in a string.
console.log(str.split(' ').map((s, i) => i%2 ==0 ?s.toUpperCase() : s));


// callback arguments in an array map method
number.map((c, i, a) => { console.log('lets print arrays'); a.map((x) => console.log(x)) } );

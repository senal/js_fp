
// merge arrays
let doMergedNDisplay = (a) => a.reduce((p, n) => p.concat(n).forEach(e => console.log(e)));



let table = new Array(2);

table[0] = new Array(2);
table[0][0] = "Ranga";
table[0][1] = "Sunduni";
table[1] = new Array(2);
table[1][0] = "Riyanna";
table[1][1] = "Semira";

doMergedNDisplay(table);

/* summing array*/

let sumArray = (a) => a.reduce((p, n) => p +n);

let numbers = new Array(3);
numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(10);

console.log('Sum ' + sumArray(numbers));

/* understand reduce 
    array.reduce(function (p, c, i, a))
*/
console.log(numbers.reduce((p, c, i, a) => {
    console.log('P' + p + '\n');
    console.log('C' + c + '\n');
    console.log('I' + i + '\n');
    console.log('A' + a + '\n');
}));

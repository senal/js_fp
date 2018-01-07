// Higer order functions are either stable another function as the input or return a function as the output.
//What Higer order functions allow is the ability to pass logic to other functions, just like obkects.

let accumulator = () => {
    let values = [];
    return accumulate = (v) => {
        if(v){
            values.push(v);
         }
         return values;
    } ;  
};

// create accumulator function instance
let accumulatorInstance = accumulator();

let names = ['Ranga', 'Senal', 'fernando'];
names.forEach(accumulatorInstance);
console.log(accumulatorInstance());
// closures in JavaScript are functions that have access to the parent scope, even when the parent function has closed.
// Closures are a feature of all functional languages.

let accumulator = () => {
    let values = [];
    return accumulate = (v) => {
        if(v){
            values.push(v);     
        }
        return values;
    };
};

 let acc = accumulator();
//acc('Ranga');
//acc('Sanduni');

//acc().forEach((e) => console.log(e));

let names = ['Ranga', 'Senal'];
names.forEach(acc);
console.log(acc());



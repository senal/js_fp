// -------------- understanding the closures

let accumulater = (e) => {
    let values = [];
    values.push(e);
    return values;
};


// this returns only the last inserted to value. Does not accumulate

console.log('value 1 :' + accumulater('Silva'));
console.log('value 2 :' + accumulater('Romba'));
console.log('value 3 :' + accumulater('Sarath'));


function merge2DArrayIntoOne(arrays){
    let count = arrays.length;
    let merged = new Array(count);
    let c = 0;
    for (let i = 0; i < count; ++i) {
        for (let j = 0, jlen = arrays[i].length; j < jlen; ++j) {
           merged[c++] = arrays[i][j];
        }        
    }
    return merged;
}

let table = new Array(2);

table[0] = new Array(2);
table[0][0] = "Ranga";
table[0][1] = "Sunduni";
table[1] = new Array(2);
table[1][0] = "Riyanna";
table[1][1] = "Semira";

let names = merge2DArrayIntoOne(table);

names.forEach(e => console.log(e));


// trying array push
let values = new Array(2);

values.push("Ranga");
values.push("Jingle");

console.log('--------------------------- print values ------------------\n');
values.forEach(e => console.log(e));






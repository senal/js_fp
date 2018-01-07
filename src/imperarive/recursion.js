let foo = (n) => {
    
    if(n != 0) {
        console.log(n);
        return foo(n-1);
    }
}
//console.log(foo(5));

let gdc = (a,b) => {
    if(b == 0){
        // base case (conquer)
        return a;
    } else {
        // recursive case (divide)
        return gdc(b, a % b);   
    }
}
//console.log(gdc(12, 8));

let lcm = (a, b) => {
    
}
// define printAnyWhere() functions

let printAnyWhere = (msg, h, w) => {
    let elem = document.createElement("div");
    elem.textContent = msg;
    elem.style.position  =  "absolute";
    elem.style.top = h;
    elem.style.left = w;
    return elem;
};

let print = printAnyWhere("hello", 100, 20);
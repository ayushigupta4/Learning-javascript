var x = 100;
let p = 4;
const c = 314;
function y() {
    var x = 3;
    console.log(x);
    console.log("let p->", p);
    console.log("const c->", c);
}
y();
console.log(x);

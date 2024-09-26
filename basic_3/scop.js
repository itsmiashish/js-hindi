let a =30;
const b =40;
var c = 400;
console.table([a,b,c]);

function checkScop() {
if (condition) {
    let a =30;
    const b =40;
    var c = 400; 
}
 
}
console.log("let value is ",a);
console.log("const value is ",b);
console.log("var value is ",c);

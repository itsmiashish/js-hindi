//scop me range. its range me curly bracket range 
 // there are various type scop avilabe in js 
 // there are 3 type  variable declear  in  js let,const,var.
 // let and const follow scop but  var don't follow scop condition.

//  let a=5;
 var b=6;
 const c= 'hello ashihs';
 console.table([a,b,c]);
 function scop_check() {
    var ba = 99;
    let ab=96;
    const ca=56;
    console.table([ba,ab,ca]);
        
 }
scop_check();

// let a=56;
 
//  const c= 'hello ashihs ji';
var b =66;
console.log(ba);
console.log(b);
console.log(c);



//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
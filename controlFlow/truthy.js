const userEmail ="a@shihs.ai"
if (userEmail) {
    console.log("yes user have email");
    }

    else
    {
        console.log("user have no email");
        
    }

    const arr = [];
    if(arr.length ==[0])
    {
        console.log("yes this is an array");
        
    }
    else
    {
        console.log("no this no an an array");
        
    }   

     const obj = {};
     if (Object.keys(obj).length==[0]) {
        console.log("this is an object");
        
     }

     else
     {
        console.log("this is not object");
        
     }
     
     // Here some false value 
     // false ,0,-0,"",Bigint 0n,null,undefine,NaN
     // true value
     // " " true, [],{} etc.

    
// Nullish Coalescing Operator (??): null undefined
let val;
val = 5??10;
console.log(val);
let val1;
val1= null??25;
console.log(val1);
let val2;
val2 = undefined ?? 88;
console.log(val2);

let val3;
val3 = null??56??23;
console.log(val3);

// its uses handel the error

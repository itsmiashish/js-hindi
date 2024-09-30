// arrow function is funtion, it's only way to write diff type write function when come es6 then introduce these function.

function hello() {
    console.log('ashish kumar sharma ');
    
}
hello()// this is normal function.

const hello1 = ()=>{
console.log("welcome Ashish Babu");

}
hello1() // this is Arrow funtion.

 const sum =()=>{
    let a =66;
    let b = 66;
    console.log(a*b);
}
sum();

const sub = ( num1,num2)=> num1-num2
console.log(sub(66,6)); // you write this type also  arrow funtion. 

const multi = (n,n1) => (n*n1)
console.log(multi(8,8));// when you this type arrow funtion and you use  parentheses than you not write return keyword.
 
const div = (num1, num2)=>{
    return num1/num2;
}
console.log(div(66,2));// when you write curly brackets then you write return keyword. 

// // let count =5;

const counter = ()=>{
  
for (let i = 1; i <8; i++) {
    let row = "";
 for(let j=1;j<i;j++){
    row += "*";
 }
 console.log(row);
}

  
   
}
counter();


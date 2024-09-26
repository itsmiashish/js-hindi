function hello() {
    console.log("Hello ashish");
    
}
hello();

function sum(number1, number2) {
    console.log(number1+number2);
    
}
sum(7,8.8);

function multiplyNumber(num1,num2) {
    return num1+num2;
    // console.log("kam hoga ya nhi check kro"); not excute after return statement. 
    
}
const result = multiplyNumber(7,9);
console.log(result);

function randomResult(num1,num2) {
    console.log(num1-num2);
    console.log("checking Scop ");
    
}
 randomResult(88,66);


 // if you declear any function and not retuen any value then after that you want to store there value any varible,that time not store.
 // they give result undefine. 
 // always remeber return value. 
 // if you return value after that you wite any line of code they not excute.

 function myFunc(theObject) {
    theObject.model= "19088";
    console.log(theObject);
    
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); 
  myFunc(mycar);
  console.log(mycar.make);
  console.log(1+"1");
  console.log(1-"1");
  
  

  const user ={

    name:"samsung",
    price:89999,
    lunch:2024
    
  }
  function handelCheek(mobile){
console.log(`my new mobile is ${mobile.name} and there price is ${mobile.price}`);

  }
  handelCheek(user);

  
// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

const newArray = [500,600,300];

function name(newArray) {
    return newArray[2];
}
console.log(name(newArray));

function cart(...value) {
    console.log(value);
    
    }
    cart(400,500,300,200,100);
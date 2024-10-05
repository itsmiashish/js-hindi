const subject = {
    one: "English",
    two: "Hindi",
    three: "Math",
    four: "Science",
}
// console.log(subject);
for (const value in subject) {
    //  console.log(value);
    //  console.log();
    //   console.log(subject[value]);


}

// const newArr =["sonu","monu","shumit","ronit","admin"];
// newArr.forEach( (item)=>{     // arrow function.
// // console.log(item);
// })

// newArr.forEach( function(item){  // normal function.
// console.log(item);

// })



const newArr = [
    
    { name: "samsung",
        price:95555

 }, 
 {name:"oppo",
    price:5588
 },
  {name:"usha",
    price:1000

  }, 
  { name:"redmi",
    price:56877
  }];

//   console.log(newArr);
newArr.forEach((item)=>{
    // console.log(item.name,item.price);
    console.log(item.price);
    
})  

// filter => when you use filter then you pass a condition then they work.

const num =[1,5,4,7,8,9,4,3,56];
const result = num.filter((item)=>{
    return item>4
})
console.log(result);


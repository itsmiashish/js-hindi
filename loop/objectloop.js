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

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);






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
// newArr.forEach((item)=>{
//     // console.log(item.name,item.price);
//     console.log(item.price);
    
// })  

newArr.map((item)=>console.log(item.name+"="+ item.price)
)



// filter => when you use filter then you pass a condition then they work. it,s filter value according to your choice.

const num =[1,5,4,7,8,9,4,3,56];
const result = num.filter((item)=>{
    return item>4
})
console.log(result);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// const Books = books.map((item)=>{
//   // console.log(item);
//   // return item;
  
// })
// console.log(Books);

// let result1 = books.filter((item)=>{
// return item.publish>2000;
// })

// console.log(result1);

const Books = books.filter((item)=>{
 return item.edition >1995 && item.publish>1995
})
console.log(Books);

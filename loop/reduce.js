// reduce need two things accumulator and current value.

const newArr =[1,2,5,9];
const result = newArr.reduce((acc,curr)=>{
    console.log(acc,curr);
    
  return acc+curr
},0)
console.log(result);
const cart =[
    {
     product:"Apple",
     price:106
    },
    { product:"Copy",
        price:505},
    { product:"Bottel",
        price:80},
    { product:"Biscute",
        price:99},
    { product:"Rice",
        price:786},

]
//  add cart item using extra variable.

// const price = cart.map((item)=>{
//     return item.price
// })
// console.log(price);

//  price.reduce((acc,cuur)=>(acc+cuur),0)
// console.log(Totalprice);

const Totalprice = cart.reduce((acc,item)=>(acc+item.price),0)
console.log(Totalprice);
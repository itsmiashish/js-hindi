const indian_hero = ["shaktiman","Naggraj","Junior G"];
const marvel_hero = ["thor","spiderman","deadpol"];
const dc_hero =["flash","wounderwoman","superman"];

// const join = indian_hero.concat(marvel_hero);
// console.log(join);

//  marvel_hero.push(dc_hero);// when you push any array in any other array then push full array.
// console.log(marvel_hero);
// console.log(marvel_hero[3][2]);// not good way. 
// const all_hero =[...indian_hero,...dc_hero,...marvel_hero];
// console.log(all_hero);



const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
console.log(Array.isArray("AShish"));
console.log(Array.from("Ashish"));
console.log(Array.from({name:"Ashish"}));// here you pass object so, form is confuse then they return empty array.

let value =200;
let value2 =300;
let value3 =400;
let value4 =800;
console.log(Array.of(value,value2,value3,value4));



console.log(typeof(value));



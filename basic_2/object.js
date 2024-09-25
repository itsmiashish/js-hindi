// Object literal and object scaletan.
//object.create   // this is object sca;etan.

// object literal

const Mysymbol = Symbol("hello")
// console.log(Mysymbol);


const User = {
    name:"Ashish", // (name) mainly define like these "name" in object. any key is string
    "fullName":"Ashish Kuamr Readdy",
    age:20,
    [Mysymbol]:"hello", // symbol define in squre bracket. 
    email:"ashish@google.com",
    "location":"Bhagalpur"
}

// console.log(User);

console.log(User.email); // this is not good way.
console.log(User["age"]);
console.log(User.fullName);

User.fullName = "ashish";
console.log(User);

// freez object lock object after that not change any value in object.
Object.freeze(User);

User.location =" patna";
console.log(User["location"]);




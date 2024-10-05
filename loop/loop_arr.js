const Myarr = [7,8,9,4,6,8,6,2,11,3,0,5,7];
for (const value in Myarr) {
//   console.log(value);
}
console.log();

Myarr.forEach(element => {
    // console.log(element);
    
});
console.log();

for (const element of Myarr) {
    // console.log(element);
    
    
}

const user ="@ashish kumar";
for (const value  of user) {

//    console.log(""?"+":value);
   
}

console.log();


// map 
// it's return always unique value. not duplicate value return. it's also a object, it's always want key value pair.

Map = new Map();
Map.set("@ashish",22);
Map.set("@manish",26);
Map.set("@ranish",21);
Map.set("@kanu",24);
Map.set("@ashish",16);
Map.set("@kanu",11);

console.log(Map);

for (const value of Map) {    
//  console.log(value);  // this simple type print you map value. in this formate print array type data.
    
}

for (const [key,value] of Map) {
 console.log(key,value); // this way you print like simple data formate. it's also know as array destructure. 

}
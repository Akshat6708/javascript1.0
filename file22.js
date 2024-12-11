 
 // spared oprator 

//  const array1=["value1","value2"];
//  const array2=["value3","value4"];

//  let myArray=[...array1,...array2]; 
//   console.log(myArray);

//spread operetor in object

let obj1={
    key1:"value1",
    key2:"value2"
}
const obj2={
    key3:"value3",
    key4:"value4"
}

// let myobj={...obj1,...obj2, key5:"value5"}

let myobj={..."abcdefghijklmnopqrstuvwxyz"};
console.log(myobj)


//   primitive vs refrence data types

//      primitive data types

// let num1=5;
// let num2=num1;
// console.log( "value of num1 is",num1);
// console.log( "value of num2 is",num2);
//   num1++;
//   //  after updating num1
//   console.log("after updating num1")
//   console.log( "value of num1 is",num1);
// console.log(  "value of num2 is",num2);



//      reference data type

let array1=["apple", "banana"];
let array2=array1;
 console.log(array1);
 console.log(array2);
  
console.log("after updating of array1");

array1.push("orange");
console.log(array1);
 console.log(array2);
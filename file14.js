
 //  how to clone array
// let array1=["item1", "item2"];
// let array2=array1.slice(0);
// let array2=[].concat(array1);
//   new method
//  spread method

// let array2=[...array1]
// array1.push("item3");
// console.log(array1===array2)
// console.log(array1);
// console.log(array2);


// Q.1
 //  add new element in array2

 let array1=["item1", "item2"];
 let oneMoreArray=["item3","item4"];
 let array2=[...array1,...oneMoreArray];
//  let array2=[...array1,"item3", "item4"];
 console.log(array1);
 console.log(array2);

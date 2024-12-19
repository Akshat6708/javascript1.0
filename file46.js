//  splice method
//  start , delete, insert

let myArray=['item1','item2','item3'];
// delete item
// let deleted_item=myArray.splice(1,1);
// console.log("deleted item is :",deleted_item)
// console.log(myArray);

//  insert item
// myArray.splice(1,0,"itserted item");
// console.log("deleted item is :",deleted_item)
// console.log(myArray);

//  delete and insert 

let deletedItem=myArray.splice(1,2,'itserted item1','inerted item2');
console.log(deletedItem);
console.log(myArray);




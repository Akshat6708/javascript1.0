
// sets(it is iterable)
// store data
// setse also have its own method
// no index-based access 
// unique items only (no duplicates allows)

// const numbers=new Set([1,2,3,4,5]);
// console.log(numbers);
// const item=['item1','item2','item3']
//  const numbers=new Set();
//  numbers.add(1);
//  numbers.add(2);
//  numbers.add(3);
//  numbers.add(4);
//  numbers.add(5);
//  numbers.add(6);
//  numbers.add(7);
//  numbers.add(8);

//  numbers.add(item)
//  numbers.add(["item1","item2"]);
//  numbers.add(["item1","item2"]);
//  console.log(numbers);
// for(let number of numbers){
//     console.log(number)
// }

const myArray=[1,2,2,3,4,5,4,5,4];
const uniqueItems=new Set(myArray);
let length=0;
for(let element of uniqueItems){
    length++;
}
console.log(length)


// console.log(uniqueItems);
// console.log(myArray);
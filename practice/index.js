

// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let isEven= numbers.filter((number)=>{
//   if(number%2===0){
//     return number;
//   }
    
// })
// console.log(isEven);



//   function
//   input: array, target(number)
//  output: index of target if target present in array

let arraytarget=(array,target)=>{
   for(let i=0;i<array.length;i++){
    if(array[i]===target){
       return i;
    }
    }
    return -1;
   }
const arrays=[1,3,5,6,7,8,9,10];
console.log (arraytarget(arrays,4));

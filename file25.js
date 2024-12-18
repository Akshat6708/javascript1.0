
//    function decleretion


// function myname(){
//     console.log("my name is akshat patidar");
// }
// myname()


// function sum(){
//     return 12+23;
// }
// console.log(sum());


// function sum(num1, num2){
//     return num1+num2
// }
// const returnValue=sum(10,30);
// console.log(returnValue);

// function isEven(number){
    // if(number%2===0){
    //  return true
    // }
    // else{
    //    return false
    // }

//     return number % 2 === 0;
// }
// const returnNumber= isEven(3);
// console.log(returnNumber);


//   function
//   input: array, target(number)
//  output: index of target if target present in array

function FindTraget(array , target){
   for(let i=0; i<array.length;i++){
    if(array[i]===target){
        return i;
    }
   }
   return -1;
}
const myarray=[1,3,5,7,56,658,457,325];
const ans= FindTraget(myarray,7);
console.log(ans);

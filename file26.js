
//  function expression

//  const sum=function(num1,num2,num3){
//     return num1+num2+num3;
//  }
// const ans= sum(1,3,3);
// console.log(ans);


const targetarray= function(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const Myarray=[1,2,4,67,56,35,233];
const Ans= targetarray(Myarray,233);
console.log(Ans);
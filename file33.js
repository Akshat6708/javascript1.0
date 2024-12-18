
//  rest perameter


// let myfunc=(a,b,...c)=>{
//     console.log( `value of a is`,a);
//     console.log( `value of b is`,b);
//     console.log( "value of c is",c);
    
// }
//  myfunc(1,2,3,4,5,6,7,8,9);


let addAll=(...numbers)=>{
    let sum=0;
    for( let number of numbers){
     sum=sum+number;
    }
    return sum;
}
 let ans=addAll(1,2,3,4,5,6,7,8,9,10);
 console.log(ans);

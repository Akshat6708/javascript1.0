
//  default perameter

// let twoNumber=(a,b)=>{
//     if(typeof b===undefined){
//         b=0;
//     }
//     return a+b;
// }

// let ans= twoNumber(3,7);
// console.log(ans);

  //     new method

let twoNumber=(a,b=0)=>{
        return a+b;
    }
    
    let ans= twoNumber(3);
    console.log(ans);
    
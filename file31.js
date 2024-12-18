
//  block scope vs function scope
//  let and const are a block scope
//   var is a function scope
//   {}  is called a block

// {
// let firstname="akshat";
// console.log(firstname);
// }

// {
//     let firstname="hariom";
//     console.log(firstname);
// }

// {
//     const firstname="akshat";
//     console.log(firstname);
//     }
    
//     {
//         const firstname="hariom";
//         console.log(firstname);
//     }


// {
//     var firstname="akshat";
//     console.log(firstname);
//     }
//      console.log(firstname);
   

let myfunction=()=>{
    const hello=()=>{
        if(true){
            var firstname="patidar";
        }
        console.log(firstname)
        var firstname="akshat";
    console.log(firstname);

    }
    hello()
}
myfunction()

//  important arrays methods

let numbers =[4,5,7,2];

// let myfunc=(number,index)=>{
//   console.log(` index is ${index} and number is ${number} `);
//}
// for(let i=0; i<numbers.length;i++){
//     myfunc(numbers[i],i);
// }

// numbers.forEach(myfunc);


// numbers.forEach(function(number){
//     console.log(`multiply of ${number}*2 is = ${number*2}`)
// })

const users=[
    { Firstname:"akshat" , age:22 },
    { Firstname:"hariom" , age:20 },
    { Firstname:"aman" , age:23 },
    { Firstname:"ajay" , age:19 }

]
// users.forEach((user)=>{
//     console.log(user.Firstname);
// })

for(user of users){
    console.log(user.Firstname);
}




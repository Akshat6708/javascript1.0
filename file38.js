//  map method

// const numbers=[1,2,3,4,5];
// const returnvalue= numbers.map((number)=>{
//    return number*number;
// })
// console.log(returnvalue)


const users=[
    {firstname:"akshat",age:22},
{firstname:"aman",age:23},
{firstname:"ajay",age:19},
    {firstname:"hariom",age:20}
]
let Name=users.map((user)=>{
    return user.firstname;
})
console.log(Name);
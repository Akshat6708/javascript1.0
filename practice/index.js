

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

// let arraytarget=(array,target)=>{
//    for(let i=0;i<array.length;i++){
//     if(array[i]===target){
//        return i;
//     }
//     }
//     return -1;
//    }
// const arrays=[1,3,5,6,7,8,9,10];
// console.log (arraytarget(arrays,4));


// let number=()=>{
//    for(let i=1;i<=10;i++){
//       console.log(i);
//    }
 
// }
// (number());
function createUser(firstname,lastname,email,id){
const userMethod={
    about:function(){
      console.log(`person name is ${this.firstname} and lastname is ${this.lastname}`)
    }
}
const user={}
console.log("hello akshat patidar")
user.firstname=firstname;
user.lastname=lastname;
user.email=email;
user.id=id;
user.about=userMethod.about;
console.log("hello akshat patidar")

return user;
}
const user1=createUser("akshat","patidar","akshatpatidar@gmail.com",123);
console.log(user1.user);

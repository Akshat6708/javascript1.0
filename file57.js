
// const user1={
//     firstname:'akshat patidar',
//     age:21,
//     address:"shree ram tempal osarna",
//     email:"akshatpatidar@gmail.com",
//     about:function(){
//         return (`person name is ${this.firstname} and person age is ${this.age}`)
//     },
//     Is_18:function(){
//         return this.age>=18 
//     }
// }
// const aboutValue=user1.about()
// console.log(aboutValue);

// create a function(function create a object)
// add key value pair
//object ko return kerega

function createUser(firstname,lastname,age,adderss,email){
    const user={}
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.adderss=adderss;
    user.email=email;
    user.about=function(){
                 return (`person name is ${this.firstname} and person age is ${this.age}`)
            }
    user.Is18=function(){
                return this.age>=18 
            }    
    return user ;    
}
const user1=createUser("akshat","patidar",20,"shree ram tampal osarna","akshatpatidar@gmail.com");
console.log(user1);
const user=user1.about()
console.log(user);
const is18=user1.Is18();
console.log(is18);
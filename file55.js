


// const user1={
//     firstName:'aksaht patidar',
//     age:22,
//     about:function(){
//         console.log(this.firstName,this.age);
//     }
// }
// const func= user1.about.bind(user1);
//  func()


//  both are same

// const user1={
//     firstName:'aksaht patidar',
//     age:22,
//     about:function(){
//         console.log(this.firstName,this.age);
//     }
// }

const user1={
    firstName:'aksaht patidar',
    age:22,
    about(){
        console.log(this.firstName,this.age);
    }
}
user1.about()

//  methods
// function inside object

// const person={
//     firstName:'aksaht patidar',
//     age:'22',
//     Myfunction:function(){
//         console.log(this)
//     //     console.log(`my name is ${this.firstName} and my age is ${this.age}`)
//     // 
//     }   
// }
// person.Myfunction()
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}
const person1={
    firstName:'akshat',
    age:22,
    about:personInfo
}
const person2={
    firstName:'akshu',
    age:21,
    about:personInfo
}
const person3={
    firstName:'hariom',
    age:22,
    about:personInfo
}
  person1.about();
  person2.about();
  person3.about();

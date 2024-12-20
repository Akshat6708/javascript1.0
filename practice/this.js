
function person(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}

const person1={
    firstName:'akshat patidar',
    age:22,
    adderss:123,
    about:person
}
const person2={
    firstName:'akshuu patidar',
    age:21,
    adderss:456,
    about:person
}

const person3={
    firstName:'hariom patidar',
    age:20,
    adderss:789,
    about:person
}
person1.about();
person2.about()
person3.about()

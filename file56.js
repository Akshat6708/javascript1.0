
// arrow function
// arrow function me this object ki vlaue ek lavel uper ki hoti hai 
// isme this object ki value window object hogi

const user1={
    firstname:'akshat',
    age:22,
    about:()=>{
        console.log(this)
        console.log(this.firstname, this.age);
    }
}
user1.about()           //  undefiend undefiend


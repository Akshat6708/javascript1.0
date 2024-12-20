
// map 
// key value pair
// const person=new Map();
// person.set('FirstName','akshat');
// person.set('age',22);
// person.set(1,"one");
// // console.log(person.get(1));
// // console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key);
//     console.log(typeof key);
// }

// console.log(person);

const preson1={
    id:1,
    fristName:'akshat',
}

const person=new Map();
person.set(preson1,{age:22,lastname:'patidar'});
console.log(person);
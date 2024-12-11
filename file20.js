// how to iterate object

const person={
    name:"akshat",
    age:22,
    hobbies:["watching web-series", "playing cricket"]
}

//   for in loop
// for(let key in person){
//     console.log( key, ":",person[key]);
// }

//    Object.keys   methode
for(let key of Object.keys(person)){
    console.log(person[key]);
}



//  perameter destructuring
//   object
//  react


let person={
    firstname:"akshat patidar",
    gender:"male",
}

// let personDetail=(obj)=>{
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }

let personDetail=({firstname,gender})=>{
    console.log(firstname);
    console.log(gender);
}

personDetail(person)
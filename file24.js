
// nested destructuring

const users=[
    {userId:"0105CS221020",fullname:"akshat patidar", gander:"male"},
    {userId:"0105CS221043",fullname:"arin nagar", gander:"male"},
    {userId:"0105CS221046",fullname:"arvind nagpure", gander:"male"},
]
const[user1,user2,user3]=users;
console.log(user1.fullname);
console.log(user2);
console.log(user3);

// for(let user of users){
//     console.log(users)
// }
// // console.log(users);

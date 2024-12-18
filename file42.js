//  find method

// const animals=["elephant","dog","lion","tiger"];
// let ans=animals.find((animal)=>{
//     return animal.length===3})
// console.log(ans);


//   real world exampal

const users=[{userId:1,mobileNo:8959173133,userName:"sunil patidar"},
    {userId:2,mobileNo:9755286708,userName:"akshat patidar"},
    {userId:3,mobileNo:9669850772,userName:"mukesh patidar"},
    {userId:4,mobileNo:9770665899,userName:"sakshi patidar"},
]

const ans=users.find((user)=>{
    return user.mobileNo===9770665899 ;
})
console.log(ans);
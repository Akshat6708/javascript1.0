
//  call  

function about (hobby,favFood){
    console.log(this.firsName,this.age,hobby,favFood);
}
const user1={
    firsName:'akshat patidar',
    age:22,
    
}
const user2={
    firsName:'samiksha patidar',
    age:20,
}
// about.call(user2,"cricket","samosa");

//  apply

// about.apply(user2,["cricket","samosa"])

const func=about.bind(user2,"cricket","samosa");
func()


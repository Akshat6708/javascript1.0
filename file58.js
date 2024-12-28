function createUser(firstname,lastname,age,adderss,email){
    const usermethod={
        about:function(){
            return (`person name is ${this.firstname} and person age is ${this.age}`)
       },
Is18:function(){
           return this.age>=18 
       }    
    }
    const user={}
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.adderss=adderss;
    user.email=email;
    user.about=usermethod.about;
    user.Is18=usermethod.Is18;

    return user ;    
}
const user1=createUser("akshat","patidar",20,"shree ram tampal osarna","akshatpatidar@gmail.com");
const user2=createUser("akshuu..","patidar",18,"shree ram tampal osarna","akshatpatidar29@gmail.com");
const user3=createUser("hariom","patidar",21,"bhopal","akshatpatidar6708@gmail.com");

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
console.log(user1.user);
    
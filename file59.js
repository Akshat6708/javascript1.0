function hello(){
    console.log("hello jee");
}

console.log(hello.prototype);
// only function provide prototype property

// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

hello.prototype.name="akshat patidar";
hello.prototype.age=21;
hello.prototype.haha=function (){
    return "haahaahaha";
}
console.log(hello.prototype);


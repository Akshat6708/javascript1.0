
//  callback functoin

let myfunc1=(callback)=>{
    console.log("call myfunc1");
    // console.log(callback)
    callback("akshat patidar");
}

let myfunc2=(firstname)=>{
    console.log("call myfunc2");
    console.log(`my name is ${firstname}`)
}

myfunc1(myfunc2);
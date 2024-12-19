//  iterables
// jispe hum for of loop laga sakte hai
//  string , array are iterable

// const firstName="akshat";
// for(let char of firstName){
//     console.log(char);
// }

const users=['item1','item2','item3'];
for(let user of users){
    console.log(user)
}

//  array like object 
// jinke pass length property hoti h
//  jinko hum index se accesss ker sakte h
// ex--> string

const firstName="akshat";
console.log(firstName.length);
console.log(firstName[2]);

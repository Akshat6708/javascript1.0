

//     function returning function



function firstFunc(){
    function secondFunc(){
  return "hello akshat";
    }
    return secondFunc;
}
let ans=firstFunc();
console.log(ans());
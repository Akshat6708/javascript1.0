// laxical scope

const Myvar="value1";

const myapp=()=>{
  const Myvar="value50";
   
  const sum= ()=>{
    // const Myvar="value100";
    console.log(Myvar)
  }
 console.log("call myapp");
 sum()
}
myapp();
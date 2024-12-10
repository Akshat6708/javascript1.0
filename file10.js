
// using for loop 


let sum=0;
console.log("hellow");
for(let num=1; num<=10;num++){
   if(num%2===0){
    continue;
   }
    sum=sum+num;
    console.log(num);

}
console.log(sum);
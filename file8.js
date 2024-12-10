
//  neasted if else

  let WinningNumber=19;
  let GusessNumber= +prompt("gusess a number");
//   console.log(typeof GusessNumber,GusessNumber);

if(WinningNumber===GusessNumber){
    console.log("gusess number is right!!");
}else{
   if(GusessNumber<WinningNumber){
    console.log(" gusess number is too low");
   }else{
    console.log(" gusess number is too high");
   }
}

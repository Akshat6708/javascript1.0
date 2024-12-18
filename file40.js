// reduce method

// let numbers= [1,2,3,4,5];

// let returnValue= numbers.reduce((accumulator, currentValue)=>{
//      return accumulator+currentValue;
// },100)          // where 100 is initial value
// console.log(returnValue);

//   how to works reduce method

//  accumulator     currentvalue      return
//     1                2                3
//     3                3                6
//     6                4                10
//     10               5                15  (ans) 

const userCart=[
    {productId:123, productName:"mobile", price:15000},
    {productId:456, productName:"laptop", price:50000},
    {productId:789, productName:"tv", price:10000},   
]

let returnValue= userCart.reduce((totalprice,currentprice)=>{
     return totalprice+currentprice.price;
},0)
console.log( ` Total price of all product is ${returnValue} RS only`);
//  totalprice            currentprice           return
//    0                       15000               15000
//    15000                   50000               65000
//    65000                   10000               75000 (ans)




// let total=0;
// for(let user of userCart){
//    total=total+user.price;
    
// }
// console.log(total);



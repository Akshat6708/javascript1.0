
//  every method
// const numbers=[2,4,6,8,10];
// let ans=numbers.every((number)=>number%2===0);
// console.log(ans);

//  real world example

const userCart=[
    {productId:123, productName:"mobile", price:15000},
    {productId:456, productName:"laptop", price:20000},
    {productId:789, productName:"tv", price:10000},   
]
let ans=userCart.every((cartPrice)=>cartPrice.price<30000);
console.log(ans);

//  some method

// const numbers=[1,3,5,7,8,9];
// const ans=numbers.some((number)=>number%2===0);
//  kya ek bhi number asa hai jo even hai
//  true 
// console.log(ans);


const userCart=[
    {productId:123, productName:"mobile", price:15000},
    {productId:456, productName:"laptop", price:200000},
    {productId:789, productName:"tv", price:10000},   
]
let ans=userCart.some((cardItem)=>cardItem.price >100000);
console.log(ans);
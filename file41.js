//    sort method


// const number=[12,66,875,8565,2,553,45,67];
// console.log(number.sort()) ;  // first of all sort function convert number to strings than sort according to string type
 
 //  so the final output is :[ 12,   2, 45, 553,  66, 67, 856,875]

// const number=[1,4,56,20,43,46];
// let ans=number.sort((a,b)=>a-b)
// console.log(ans);


// const student=["hariom","akshat","aman","ajay","AKSHAT","PATIDAR"];
// console.log(student.sort());


// let number=[1,2,3,450,3131,2352,];
// console.log(number.sort()) ;


// const numbers=[1,23,67,44,454,10,2];
// let ans=numbers.sort((a,b)=>{
//     return a-b
// })
// console.log(ans);

// how to work this code
//  ex.-->  
//  67,44  (a,b)
// a-b = 23
//   a-b  ---> postitive  (greater then 0) --->  b,a
//   44,67


///1,23
//  a-b = negetive
//   a-b  ---> negetive  (less then 0) --->  a,b
//   1,23

//  real world exampale


//  price low to high and high to low sort

const mobiles=[{mobileId:1,mobileName:"realme 5 pro",price:15000},
    {mobileId:2,mobileName:"realme 7 pro ",price:17000},{mobileId:3,mobileName:"realme 8 pro",price:20000},
    {mobileId:4,mobileName:"realme 3",price:9000},
    {mobileId:5,mobileName:"realme C2",price:7000},
]
const lowToHigh=mobiles.slice(0).sort((a,b)=>{
    return a.price-b.price
})
const highToLow=mobiles.slice(0).sort((a,b)=>{
    return b.price-a.price
})
console.log(lowToHigh);
console.log(highToLow)
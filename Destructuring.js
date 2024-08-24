//destructuring= object , array , string.
// = case sensitive compulasary in object



//   // 1. object.....
//= get by key
// let laptop = {
//     "name":"HP",
//     "price":"50000",
//     "color":"white"
// }
// let{name,price,color}=laptop
// console.log(name)


// 2. Array ...............
// // = get by index number
// let fruits=["apple", "banana","mango"]
// let [f1,f2,f3] = fruits
// console.log(f2,f3)

// skip destruct...

// let fruits=["apple", "banana","mango"]
// let [,f2,f3] = fruits
// console.log(f2,f3)      //banana mango

// 3.string 

// let name="javascript"
// let [a,b,c,d]=name
// console.log(name)



// //4. swapping
//1. let a=10;
// let b=20;
// let c;
// function swap() { 
//  c=a
//  a=b
//  b=c
// }
// console.log(swap(10,20)) //20,10

//  2.function swap(x, y) {
//     var t = x;
//     x = y;
//     y = t;
//     return [x, y];
// }
// console.log(swap(2, 3)); //3,2

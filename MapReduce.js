
// let num=[10,20,20,40]
// for(let s=0; s<=num.length; s++){
//     let num2=num[s]+2
// console.log(num2)

// }
// map****
// let num=[10,20,20,40]
// let add=num.map(item=>item+2)
// console.log(add)
// console.log(num)


// reduce ***********
// let num=[10,20,20,40]
// let total= num.reduce((a,b)=> a+b)
// console.log(total)    //90

// filter**************
// let age=[10,20,30,40]
// let result=age.filter((a)=>a>20)
// console.log(result)    //[30, 40]


let Student=
 [
    {
        name:"shivii",
        class:1,
        percentage:90,
        subject:"Math",
        age:18
    },
    {
        name1:"shruti",
        class:2,
        percentage:80,
        subject:"commerce",
        age:22
    },
    {
        name1:"Abhishek",
        class:2,
        percentage:70,
        subject:"commerce",
        age:23
    },
    {
        name1:"shruti",
        class:23,
        percentage:60,
        subject:"commerce",
        age:23
    },
    {
        name1:"Niyati",
        class:2,
        percentage:80,
        subject:"commerce",
        age:20
    }
 ]
//  const Student1 = new Student();
 let Std=Student.filter((percentages)=>percentages.percentage>80)
 console.log(Std);


// map,filter= return multiple data 
// reducduce= single data , two num compulasery
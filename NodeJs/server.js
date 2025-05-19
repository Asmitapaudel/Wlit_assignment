// function sumTwoNumber(a,b){
//     sum=a+b
//     console.log(sum)
// }
// sumTwoNumber(5,3)

// function cb(data){
//     console.log(data)
// }

// const main=(a, b ,cb)=>{
//     const sum =a+b
//     cb(sum)
// }

// main(2,3,cb)

// const two_number = require("./math_module");

// console.log("Addition: " + two_number.add_two(2, 5));       
// console.log("Subtraction: " + two_number.sub_two(10, 5));   
// console.log("Multipication: " + two_number.mul_two(2, 5));       
// console.log("Division: " + two_number.div_two(10, 5));   


const fs =require("fs")

console.log("Bg1")
console.log(fs.readFileSync("./file.txt",'utf-8'))
console.log("bg2")

console.log("bg3")
fs.readFile("./file.txt" ,'utf-8',(err,data )=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
console.log("bg4")
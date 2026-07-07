// Run one by one each :

// const userEmail="yash@gmail.com"
// if(userEmail){
//     console.log("Got user email")
// }else{
//     console.log("don't have user email")
// }

// const userEmail=""
// if(userEmail){
//     console.log("Got user email")
// }else{
//     console.log("don't have user email")
// }

// const userEmail=[]
// if(userEmail){
//     console.log("Got user email")
// }else{
//     console.log("don't have user email")
// }

// falsy values:
// false,0,-0,BigInt 0n,null,undefined,"",NaN

// truthy values:
// "0","false"," ",[],{},function(){}

const user=[]
if(user.length===0){
    console.log("Array is empty")
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): Null,Undefined
let val1; 
// run each val1 at time:-
// val1=5 ?? 10
// val1=null ??10
// val1= undefined ?? 23
val1=null ?? 16 ??10
console.log(val1)
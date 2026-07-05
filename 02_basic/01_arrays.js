// Array

const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","nagaraj"]
const myArr2= new Array(1,2,3,4)
// console.log(myArr[0]); 

// Array methods:
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))    //output type is boolean.
// console.log(myArr.indexOf(-19))    //if the given number s not in arry it gives output "-1" .

const newArr= myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof (newArr)) 

// slice,splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1)

console.log("B ",myArr)
const myn2=myArr.splice(1,3)
console.log(myn2)

console.log("c ",myArr)

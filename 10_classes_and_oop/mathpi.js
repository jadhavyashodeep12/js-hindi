const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)

const Chai={
    name:"ganger chai",
    price:250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(Chai,"name"))
Object.defineProperty(Chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(Chai,"name"))
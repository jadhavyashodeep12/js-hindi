// Primitive:
// 7 Types- string,Number,Boolean,null,undefined,symbol,BigInt

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId);

const bigNumber=123456787890987654n
console.log(typeof(bigNumber));

// Reference (Non primitive):
// Array,Objects,Functions
// array:
const heros=["shaktiman","naagraj","doga"];
let obj={
    name:"yash",
    age:22
}
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

// ************************************************************************
// stack(Primitive),Heap (Non-Primitive)
let myYoutubename="Yashodeepjadhav.com"
let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// heap:
let userone={
    email:"yash@gmail.com",
    age:22
}
let usertwo = userone;
usertwo.email="yashodeeep@gmail.com"
console.log(userone);
console.log(usertwo);

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,500))

const user={
    name:"Yash",
    price:"900"
}
function handelObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}
// handelObject(user)


const mynewArray=[200,3000,40000]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewArray))
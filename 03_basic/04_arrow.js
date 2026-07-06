const user={
    username:"Yashodeep",
    price:999,

    welcomeMessage :function(){
        console.log(`${this.username},welcome to website`)
    }
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this)               //"this" canot work out site the object like it is global scope.

// function chai(){
//     let username="Yash"
//     console.log(this)
// }
// chai()                  // we canot use "this" inside function

// const chai=() =>{
//      let usernaem="Yash"
//      console.log(this)
// }
// chai()

// const addtwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addtwo(3,4))

// const addtwo=(num1,num2) => (num1+num2)         //implicit return
// console.log(addtwo(3,4))

const addtwo=(num1,num2) => ({username:"Yash"})
console.log(addtwo(3,4))




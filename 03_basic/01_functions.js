// console.log("H")
// console.log("A")
// console.log("S")
// console.log("Z")
// console.log("E")

function sayMyname(){
    console.log("H")
    console.log("A")
    console.log("S")
    console.log("Z")
    console.log("E")
}
// sayMyname()                  //calling function syntax.

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
// addTwoNumbers(3,4)
// addTwoNumbers(3,null)

function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}
const result=addTwoNumbers(4,4)
// console.log("Result:",result)


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Yashodeep"))


function loginUserMessage(username){
    if(username===undefined){
       console.log("Please enter username!");
       return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

// same syntax for if statement.  and username is default if username is undefined the automatically take default value
function loginUserMessage(username="Sam"){
    if(!username){
       console.log("Please enter username!");
       return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

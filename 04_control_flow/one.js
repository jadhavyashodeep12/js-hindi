// if:
// <,>,<=,>=,==,!=,===,!==                     --// "===" it checks strictly 
// if(2=="2"){
//     console.log("Executed")
// }
// if(2==="2"){
//     console.log("Executed")                   // it value not excuted beacuse the candtion value is false        
// }

// const temperature=41
// if(temperature<50){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature is greater than 50")
// }

// const score=200
// if(score>100){
//     let power="Fly"                            //scope
//     console.log(`user power:${power}`)
// }

// const balnace=1000
// if(balnace>500) console.log("Test")

// const balance=1000
// if(balance<500){
//     console.log("less than")
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromgoogle=false
const loggedInfromEmail=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy cources")
}
if(loggedInFromgoogle || loggedInfromEmail){
    console.log("user logged in !")
}

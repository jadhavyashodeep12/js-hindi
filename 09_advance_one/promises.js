const promiseOne= new Promise(function(resolve,reject){
    //DO and async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log("async task is completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

//Another method to creaet promise:
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Yashodeep",password:"123"})
        }else{
            reject('ERROR SOMETHING WENT WRONG')
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("the promise is either resolved or rejected")
})
//you can use either .then,.catch or try async,await
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR SOMETHING WENT WRONG')
        }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

///////
// async function getAllUsers(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
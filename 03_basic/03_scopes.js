
// let a=300
// Globa scope: when i decalre a outside the if statement it can be accessible inside  the loop and 
// out side the loop
// scope:- when you declare a,b inside the if statement you can not access them outside the if satatement
// but var c can accessiable and it may provide bugs or error so we did not use Var
if(true){
    let a=10
    const b=20
    var c=30
    // console.log("inner :",a)            //check using comment the let a is let a=300 can be accessible 
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName="Yashodeep"

    function two(){
        const website="Youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
}
// one()

if (true){
    const username="Yash"
    if (username=== "Yash"){
        const website="youtube"
        // console.log(username + website);
    }
}

// +++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++

function addone(num){
    return num+1
}
addone(5)


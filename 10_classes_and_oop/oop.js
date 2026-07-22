const user={
    username:"yash",
    loginCount:8,
    signedIn:true,

    getuserDetail:function(){
        console.log("Got user details from database")
        console.log(this)
        console.log(`username:${this.username}`)
    }
}
console.log(user.username)
console.log(user.getuserDetail())

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne=new  User("Yash",12,true)
const userTwo=new User("Chai aur code",11,false)
console.log(userOne.constructor)
// console.log(userTwo)
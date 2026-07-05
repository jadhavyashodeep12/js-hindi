// 1) singleton:
// Object.create()

// objects literals:
const mySym= Symbol("key1") // created a symbol.
const Jsuser={ 
    name:"Hitesh",
    "full_name":"Yashodeep jadhav",
    [mySym]:"mykey1",                       // symbol declared in format of object keys.
    age:21,
    location:"Mumbai",
    email:"Yash12@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(Jsuser.name)
// console.log(Jsuser["email"])
// console.log(Jsuser["full_name"])
// console.log(Jsuser[mySym])

Jsuser.email="Yasho1234@gmail.com"
// Object.freeze(Jsuser)           // when we use .freeze we can't change the any keys of object Jsuser.
Jsuser.email="yash1234562@gmail.com"
// console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("hello JS user!!")
}
console.log(Jsuser.greeting)
console.log(Jsuser.greeting())
Jsuser.greetingtwo=function(){
    console.log(`hello JS user,${this.name}`)
}
console.log(Jsuser.greetingtwo())
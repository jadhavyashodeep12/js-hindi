// let myName="yash"
// console.log(myName.truelength)


let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hamer",
    spiderman:"sling",

    getSpiderPower : function(){
        console.log(`spidy power is $(this.spiderman)`)
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`)
}
heroPower.hitesh()
Array.prototype.heyHitesh=function (){
    console.log(`Hitesh says hello`)
}
myHeros.heyHitesh()
// heroPower.heyHitesh()///it gives eerror


// Inheritance //
const User={
    name:"chai",
    email:"cjai@google.com"
}
const Teacher ={
    makeVideo: true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern syntax:
Object.setPrototypeOf(TeachingSupport,Teacher)
let anotheUserName="chaiaurcode      "
String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotheUserName.trueLength()
"yashodeeep".trueLength()
"yash".trueLength()

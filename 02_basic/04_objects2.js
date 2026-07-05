// const tinderUser= new Object()            //--singleton object         note:- Run one -by -  one const
const tinderUser={}                          //--Non-singleton object

tinderUser.id="101abc"
tinderUser.name="Yash"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser= {
    email:"yasho@gmail.com",
    fullname:{
        userfullname:{
            fisrtname:"yashodeep",
            lastname:"jadhav"
        }
    }
}
// console.log(regularUser.fullname.userfullname.fisrtname)

// how to combine two objects:
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign({},obj1,obj2)         //method 1
const obj3= {...obj1,...obj2}                      //method 2 using spread operater of 3 dots ...
// console.log(obj3)

// Objects in Array
const user=[
    {
    },
    {
    },
    {
        name:"yash"
    }
]
// console.log(user[2].name)

console.log(tinderUser)
console.log(Object.keys(tinderUser))          // all the keys are stored in to a arrey
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

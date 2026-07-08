// for of

// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings="Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps:-
// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United states of America")
// map.set('FR',"France")
// console.log(map)

const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")
map.set('IN',"India")
// console.log(map)                     // can not add duplicate values 

// for (const key of map) {
//     console.log(key)
// }                           // it gives array of keys
// for (const [key,values] of map) {
//     console.log(key,':-',values)
// }    


// IT gives error object not itreable:
const myObject={
    game1:'NFS',
    game2:'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key, ':',value)
}

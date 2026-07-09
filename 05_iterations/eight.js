// Reduce:-
const myNums=[1,2,3]
// using function method:
// const myTotal=myNums.reduce(function(acc,currentvalue){
//     console.log(`Acc:-${acc} and currentvalue:-${currentvalue}`)
//     return acc+currentvalue
// },0)
// using arrow function:
// const myTotal=myNums.reduce((acc,currentvalue)=> acc+currentvalue,0)

// console.log(myTotal)
// -----
const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay)
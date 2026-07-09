const coding=["ja","ruby","java","pyhon","cpp"]
// 1)
// coding.forEach(function (item){
//     console.log(item)
// })
// 2)
// coding.forEach((item)=>{
//     console.log(item)
// })
// 3)
// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)
// 4)
// coding.forEach((item,index,arr)=>{
//     console.log(item, index, arr)
// })

const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})

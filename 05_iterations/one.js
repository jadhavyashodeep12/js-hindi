//For

// for (let index = 0; index < 10; index++) {
//     const element = index;  
//     console.log(element)
// }
for (let index = 0; index < 10; index++) {
    const element = index; 
    if(element==5){
        // console.log("5 is best number!")
    } 
    // console.log(element)
}

// for (let i = 0; i < 10; i++) {
//     console.log(`outer lop value:${i}`)
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner loop value ${j} and outer loop value${i}`)
//     }
// }

let myArray=["Flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

//+++++++++++++Break and Continue++++++++++++//
// BREAK:-
// for (let index = 0; index <=20; index++) {
//     if(index==5){
//         console.log(`value of i is${index}`)
//         break;
//     }
//      console.log(`value of i is${index}`)
// }

// CONTINUE:-
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`value of i is${index}`)
        continue
    }
     console.log(`value of i is${index}`)
}

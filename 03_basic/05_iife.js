// Immediately Invoked Function Expresions (IIFE)

(function chai(){
    console.log("DB CONNECTED");
})();
// ()()       //-- it is IIFE (function)()

( (name)=>{
    console.log(`DB CONNECTED TWO $(name)`);
})("Yash");                                              //IMP: ";" is important where i give at the end.